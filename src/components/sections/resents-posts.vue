<template>
  <section class="sidebar-section">
      <h3>{{ t('blogPage.sidebar.recentPostsTitle') }}</h3>
      <div class="recent">
        <a v-for="(post, index) in posts" :key="index" class="recent-item" href="blog-post.html">
          <img :src="post.image" :alt="post.title">
          <div>
            <strong>{{ t(`blogPage.posts.${post.title}`) }}</strong>
            <span>{{ post.date}}</span>
          </div>
        </a>
    </div>
    </section>
</template>

<script setup>
  import photo1 from '@/assets/images/blog/photo-living-room.avif'
  import photo2 from '@/assets/images/blog/photo-bed-room.avif'
  import photo3 from '@/assets/images/blog/photo-open-space.avif'
  import photoMain from '@/assets/images/blog/photo-living-and-kitchen-room.avif'

  import { useI18n } from 'vue-i18n'
  const { t } = useI18n()

  const posts = [
    {
      title: 'post1.title',
      date: 'April 28, 2024',
      category: 'Sustainability',
      excerpt: 'post1.excerpt',
      image: photo1,
      link: '/blog-post',
      readMore: 'post1.readMore'
    },
    {
      title: 'post2.title',
      date: 'April 15, 2024',
      category: 'Design',
      excerpt: 'post2.excerpt',
      image: photo2,
      link: '/blog-post',
      readMore: 'post2.readMore'
    },
    {
      title: 'post3.title',
      date: 'April 2, 2024',
      category: 'Process',
      excerpt: 'post3.excerpt',
      image: photo3,
      link: '/blog-post',
      readMore: 'post3.readMore'
    }
  ]

</script>

<style>

</style>
