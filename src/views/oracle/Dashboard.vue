<template>
    <div class="font-bold p-4 text-2xl text-white">
        Dashboard
    </div>
    <Teleport v-if="this.ctmdropdown" to="#ctmdropdown">
        <div v-if="this.visible.dropdown" class="flex">
            <select v-model="this.store.state.databases.Id" class="input block w-fit rounded border-0 py-1 px-2 text-white">
                <option v-for="item in this.existingDBConn" :value="item.Id">{{ item.IP }}
                </option>
            </select>
            <hr class="border h-6 my-1 mx-4">
            <div v-if="this.store.state.databases.Id" class="flex gap-4">
                <select v-for="submodule in DATABASES_SUBMODULES.oracle" @change="gotoSubmodule" class="input block w-48 rounded border-0 py-1 px-2 text-white">
                    <option value="" disabled selected hidden>{{ submodule.title }}</option>
                    <option v-for="item in submodule.options" :value="item.url">{{ item.name }}
                    </option>
                </select>
            </div>
        </div>
    </Teleport>
</template>

<script>
import { get_existing_db_connection } from '/src/assets/js/database.js'
import { useStore } from 'vuex'
import { DATABASES_SUBMODULES } from  '/src/assets/data/dashboard.json'

export default{

    data(){
        return{
            selectedSubmodule: null,
            existingDBConn: null,
            store: useStore(),
            visible:{
                dropdown: null
            },
            ctmdropdown: false,
            DATABASES_SUBMODULES
        }
    },
    methods:{

        getExistingConnections: async function(){
            let result = await get_existing_db_connection('Oracle')
            if (result.data.status) {
                this.existingDBConn = result.data.message
                this.store.state.databases.Id = (this.store.state.databases.Id) ? this.store.state.databases.Id : this.existingDBConn[0].Id
            } else {
                this.existingDBConn = null
            }
        },
        gotoSubmodule(event){
            let route = event.target.value
            this.$router.push(route)
        }
    },
    mounted: function (){
        this.visible.dropdown = true
        this.ctmdropdown = document.querySelector('#ctmdropdown') ? true : false
        this.getExistingConnections()
    }
}

</script>