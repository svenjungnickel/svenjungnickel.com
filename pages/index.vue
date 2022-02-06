<template>
  <div class="flex h-screen w-screen flex-row flex-wrap content-center bg-white p-3">
    <div class="mx-auto sm:w-2/3 md:w-auto lg:w-2/3">
      <ProfileCard :content="page" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData({ $content }) {
    const page = await $content('index').fetch()

    return {
      page,
    }
  },
  head() {
    return {
      title: this.page.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.description,
        },
      ],
    }
  },
}
</script>
