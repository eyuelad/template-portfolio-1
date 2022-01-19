<template>
  <div class="">
    <!-- SECTION:HERO -->
    <HomeHero />

    <!-- SECTION:About -->
    <section id="about" class="py-12 xl:py-20">
      <div
        class="lg:container mx-auto py-4 px-8 md:px-10 lg:px-12 md:grid grid-cols-6 gap-6 lg:gap-8 xl:gap-12"
      >
        <div class="col-span-2 mb-16 md:mb-0">
          <h3 class="text-2xl font-medium mb-8 lg:mb-10">About Me</h3>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ab
            omnis quod error placeat ullam voluptatibus possimus nobis suscipit
            nostrum ratione animi voluptate, aliquid pariatur ex in. Laboriosam,
            nobis explicabo.
          </div>
        </div>

        <div class="col-span-3 col-start-4">
          <h3 class="text-2xl font-medium mb-8 lg:mb-10">My Skills</h3>
          <div class="grid grid-cols-2 gap-6">
            <div>
              <div class="mb-2 text-lg text-zinc-600 font-bold">Expert</div>
              <div
                v-for="(skill, i) in skillsExpert"
                class="py-1"
                data-aos="fade-in-up"
                data-aos-once="false"
                :data-aos-delay="i * 200"
              >
                {{ skill }}
              </div>
            </div>

            <div>
              <div class="mb-2 text-lg text-zinc-600 font-bold">Novice</div>
              <div
                v-for="(skill, i) in skillsNovice"
                class="py-1"
                data-aos="fade-in-up"
                data-aos-once="false"
                :data-aos-delay="i * 200"
              >
                {{ skill }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION:WORKS -->
    <Works />

    <section id="home-cta" class="py-8 lg:py-12">
      <div class="container mx-auto py-4 px-8 md:px-10 lg:px-12 text-center">
        <div class="p-6 xl:p-8 mx-auto lg:w-[70%] xl:w-[50%] bg-zinc-100">
          <div class="mb-6 lg:mb-8 text-lg">
            Dicta amet ex minima quibusdam autem veritatis suscipit. Beatae
            corrupti quaerat vero dolores, molestias natus id, earum, harum nam
            omnis assumenda veritatis?
          </div>

          <div class="mb-6 md:mb-8 text-xl font-semibold">Let's Chat</div>

          <div class="flex justify-center">
            <button class="btn-default mx-1 md:mx-2">social-1</button>
            <button class="btn-default mx-1 md:mx-2">social-2</button>
            <button class="btn-default mx-1 md:mx-2">social-3</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import aosMixin from '~/mixins/aos'
import { getAssetImage } from '~/utils/images'

export default {
  mixins: [aosMixin],
  data() {
    return {
      skillsExpert: ['VueJS', 'NuxtJS', 'Vuetify', 'TailwindCSS'],
      skillsNovice: ['ReactJS', 'NextJS', 'Angular'],
    }
  },
  methods: {
    getAssetImage: getAssetImage,
  },
}
</script>
