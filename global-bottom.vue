<template>
  <footer v-if="$slidev.nav.currentPage > 5" class="absolute bottom-0 flex justify-between w-full p-4 z-10 gap-4">
    <a class="underline underline-offset-4 decoration-dashed" href="https://github.com/smarlhens" target="_blank">
      Samuel MARLHENS
    </a>
    <span class="border border-1 rounded-full"></span>
    <span class="flex grow justify-between items-center h-6 tabular-nums">
      <span>09/2014</span>
      <span :class="[$slidev.nav.currentPage >= 29 && 'invisible']">
        <img
          src="/images/smarlhens_400x400.webp"
          alt="Samuel MARLHENS"
          class="rounded-full max-h-[3rem] border border-2 border-white"
        />
      </span>
      <span>09/2016</span>
      <span :class="[($slidev.nav.currentPage < 29 || $slidev.nav.currentPage >= 40) && 'invisible']">
        <img
          src="/images/smarlhens_400x400.webp"
          alt="Samuel MARLHENS"
          class="rounded-full max-h-[3rem] border border-2 border-white"
        />
      </span>
      <span>09/2019</span>
      <span :class="[($slidev.nav.currentPage < 40 || $slidev.nav.currentPage >= 53) && 'invisible']">
        <img
          src="/images/smarlhens_400x400.webp"
          alt="Samuel MARLHENS"
          class="rounded-full max-h-[3rem] border border-2 border-white"
        />
      </span>
      <span>01/2022</span>
      <span :class="[$slidev.nav.currentPage < 53 && 'invisible']">
        <img
          src="/images/smarlhens_400x400.webp"
          alt="Samuel MARLHENS"
          class="rounded-full max-h-[3rem] border border-2 border-white"
        />
      </span>
      <span>12/2023</span>
    </span>
    <span class="border border-1 rounded-full"></span>
    <span class="inline-flex gap-1 tabular-nums">
      <span>{{ $slidev.nav.currentPage < 10 ? '0' : '' }}{{ $slidev.nav.currentPage }}</span>
      <span>/</span>
      <span>{{ $slidev.nav.total }}</span>
    </span>
  </footer>
</template>
