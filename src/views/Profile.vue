<template>
  
  <div class="flex flex-col sm:flex-row justify-between p-4 py-1 mt-2">
    <div
      class="flex flex-col justify-start items-center px-5 mt-10 w-full md:w-1/2 border"
    >
      <div class="relative">
        <img class="inline-flex object-cover border-4 border-indigo rounded-full h-[20rem]" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fkhoinguonsangtao.vn%2Fwp-content%2Fuploads%2F2022%2F08%2Fhinh-anh-avatar-luffy.jpg&f=1&nofb=1&ipt=056a2743b90b436921744ef8ec7b493d45845239fb55f01836bf2a701c0acdc5&ipo=images" alt="">
      </div>

      <div class="mt-2 w-full flex flex-col justify-start items-start">
        <div
      class="text-2xl font-bold self-center text-white group bg-black rounded-lg p-4 w-1/2 flex justify-center gap-2 tracking-[.5rem]">USER<span class="text-center rounded-sm bg-indigo text-black">NAME</span>
      </div>
        <span class="self-end"></span>

        <h2 class="text-base md:text-md text-gray-200 font-bold self-center">
       
        <a href="" target="_blank"
        class="text-indigo-900 hover:text-indigo-600 font-bold border-b-0 hover:border-b-4 hover:border-b-indigo-300 transition-all mb-2">
         #31504874
        </a>
        </h2>
 
        <p class="mt-2 text-sm text-gray-300">Daghan man gud og supply sa make up, taga hour lage mag retouch hahaha mga thrice a day? hahaha.</p>

    <ul class="flex flex-row mt-2 self-center">
    <li class="mx-2">
      <a href="" target="_blank" aria-label="GitHub">
        <i class="fa-brands fa-github text-2xl hover:text-white"></i>
    </a>
    </li>

    <li class="mx-2">
      <a href="" target="_blank" aria-label="Email">
        <i class="fa-solid fa-envelope text-2xl hover:text-white"></i>
    </a>
    </li>

    <li class="mx-2">
      <a href="" target="_blank" aria-label="Twitter">
        <i class="fa-brands fa-twitter text-2xl hover:text-white"></i>
      </a>
    </li>
  </ul>
      
        <button class="bg-transparent hover:bg-indigo text-gray-100 font-semibold hover:text-gray py-1 px-2 mt-2 border border-gray-100 rounded w-1/2 self-center">
         Edit Profile
        </button>

      </div>
    </div>


    
    <div class="flex flex-col justify-start px-5 py-4 mt-15 border w-full">
      <div class="w-full">
        <ul class="flex w-full gap-2 border-b border-gray-50/20">
            <li v-for="item in tabItems" :key="item" class="border-solid border-b-2 border-transparent hover:border-indigo cursor-pointer text-white font-thin px-4 py-2">
                {{ item }}
            </li>
        </ul>
      </div>
      

      <div class="mt-4 flex flex-col w-full h-full text-white">
        <div class="flex w-full h-fit items-center">
          <h2 class="w-full">🚀🐱About Me</h2>
          <button title="Edit Gayness" class="self-end w-fit flex justify-center items-center rounded-xl p-2.5 bg-gray-700 rounded- hover:rounded-2xl hover transition-all duration-300 text-white"><i class="fa-solid fa-pen-to-square"></i></button>
       </div>
        <p>I'm a DBA specializing in DBA CHUM. I enjoy Coding.</p>
        
        <hr class="h-px my-2 bg-gray-100 border-0 dark:bg-gray-300">
        
        <Card  class="bg-gray-500 w-1/2 h-30 py-1 mt-3">
          What is Lorem Ipsum?
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        </Card>

        <Card  class="bg-gray-500 w-1/2 h-30 py-2 mt-3">
          What is Lorem Ipsum?
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        </Card>
         





      </div>
    </div>
  </div>
</template>

<script>
import Card from '../components/Card.vue';

export default{
    components:{
      Card
    },
    data(){
        return{
            tabItems: ["Overview","Activities"],
        };
        
    }
}
</script>

