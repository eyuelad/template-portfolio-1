<template>
  <section id="works" class="slider bg-zinc-800 text-zinc-50">
    <div
      class="lg:container mx-auto py-10 md:py-16 2xl:py-20 px-8 md:px-10 lg:px-12"
    >
      <h2 class="text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-center">
        My Works
      </h2>
      <div class="slider rounded-lg">
        <div
          v-for="(work, index) in works"
          :key="work.title"
          class="slide mr-2"
          :class="'slide--' + index"
        >
          <div
            class="slide__text p-4 md:p-6 w-full bg-gradient-to-t from-zinc-900 to-transparent"
            :class="'slide__text--' + index"
          >
            <h3
              class="slide__title md:mb-2 text-lg sm:text-xl md:text-2xl text-zinc-100"
              :class="'slide__title--' + index"
            >
              {{ work.title }}
            </h3>

            <div
              class="slide__description md:text-lg text-zinc-200"
              :class="'slide__description--' + index"
            >
              {{ work.description }}
            </div>
          </div>
          <img
            class="slide__image xl:max-h-[70vh] w-[70vw] sm:w-[80vw] lg:w-[65vw] object-contain aspect-[1.6] bg-zinc-200 rounded-lg"
            :class="'slide__image--' + index"
            :src="getAssetImage(work.image)"
            :alt="work.title + ' image'"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.slider {
  position: relative;
  white-space: nowrap;
  overflow-x: auto;
}
.slide {
  display: inline-block;
  position: relative;
}
.slide__text {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
}

.slide__image {
  transform-origin: bottom left;
}
</style>

<script>
import { getAssetImage } from '~/utils/images'
export default {
  data() {
    return {
      works: [
        {
          title: '[Client] Web Site Development',
          description: `A responsive website designed & developed for [Client Name]`,
          image: 'placeholder.png',
          url: 'https://eyuelad.github.io',
        },
        {
          title: '[Client] Web Site Development',
          description: `A responsive website designed & developed for [Client Name]`,
          image: 'placeholder.png',
          url: 'https://eyuelad.github.io',
        },

        {
          title: '[Client] Web Site Development',
          description: `A responsive website designed & developed for [Client Name]`,
          image: 'placeholder.png',
          url: 'https://eyuelad.github.io',
        },

        {
          title: '[Client] Web Site Development',
          description: `A responsive website designed & developed for [Client Name]`,
          image: 'placeholder.png',
          url: 'https://eyuelad.github.io',
        },

        {
          title: '[Client] Web Site Development',
          description: `A responsive website designed & developed for [Client Name]`,
          image: 'placeholder.png',
          url: 'https://eyuelad.github.io',
        },
      ],
    }
  },
  mounted() {
    gsap.utils.toArray('.slide__text').forEach((text, i) => {
      gsap
        .timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            scroller: text.closest('.slider'),
            horizontal: true,
            trigger: text.closest('.slide'),
            start: 'left right',
            end: 'left center',
            scrub: true,
          },
        })
        .fromTo('.slide__title--' + i, { x: 150 }, { x: 0 }, 0)
        .fromTo('.slide__description--' + i, { x: 150 }, { x: 0 }, 0)
        .from('.slide__image--' + i, { scale: 0.8 }, 0)
    })
  },
  methods: {
    getAssetImage: getAssetImage,
  },
}
</script>
