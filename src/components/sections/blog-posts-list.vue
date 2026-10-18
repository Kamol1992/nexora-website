<template>
  <div class="post-list">
    <article v-for="(post, index) in paginatedPosts" :key="index" :class="index === 0 ? 'featured' : 'post-card'">
      <img :src="post.image" :alt="post.title" :class="index === 0 ? 'featured-image' : ''">
      <div :class="index === 0 ? 'featured-copy' : ''">
        <div class="meta">{{ post.date }} · {{ post.category }}</div>
        <h2>{{ t(`blogPage.posts.${post.title}`) }}</h2>
        <p :class="index === 0 ? 'excerpt' : ''">{{ t(`blogPage.posts.${post.excerpt}`) }}</p>
        <a class="read-more" :href="`blog/${post.link}`">{{ t(`blogPage.posts.${post.readMore}`) }}</a>
      </div>
    </article>
  </div>
</template>

<script setup>
  import { computed } from 'vue'
  import photo1 from '@/assets/images/blog/photo-living-room.avif'
  import photo2 from '@/assets/images/blog/photo-bed-room.avif'
  import photo3 from '@/assets/images/blog/photo-open-space.avif'
  import photoMain from '@/assets/images/blog/photo-living-and-kitchen-room.avif'

  import { useI18n } from 'vue-i18n'
  const { t } = useI18n()

  const props = defineProps({
    search: {
      type: String,
      default: ''
    },
    currentPage: {
      type: Number,
      default: 1
    },
    filter:{
      type: String,
      default: 'all'
    }
  })

  const posts = [
    {
      title: 'post1.title',
      date: 'April 28, 2024',
      category: 'residential',
      excerpt: 'post1.excerpt',
      image: photo1,
      link: 'sustainable-design-principles',
      readMore: 'post1.readMore'
    },
    {
      title: 'post2.title',
      date: 'April 15, 2024',
      category: 'interior',
      excerpt: 'post2.excerpt',
      image: photo2,
      link: 'future-of-urban-living',
      readMore: 'post2.readMore'
    },
    {
      title: 'post3.title',
      date: 'April 2, 2024',
      category: 'interior',
      excerpt: 'post3.excerpt',
      image: photo3,
      link: 'future-of-urban-living',
      readMore: 'post3.readMore'
    },
     {
      title: 'post4.title',
      date: 'April 28, 2024',
      category: 'residential',
      excerpt: 'post4.excerpt',
      image: photoMain,
      link: 'architecture-shapes-life',
      readMore: 'post4.readMore'
    },
    {
      title: 'post1.title',
      date: 'April 28, 2024',
      category: 'commercial',
      excerpt: 'post1.excerpt',
      image: photo1,
      link: 'sustainable-design-principles',
      readMore: 'post1.readMore'
    },
    {
      title: 'post1.title',
      date: 'April 28, 2024',
      category: 'publicc',
      excerpt: 'post1.excerpt',
      image: photo1,
      link: 'sustainable-design-principles',
      readMore: 'post1.readMore'
    }
  ]

  const filteredPosts = computed(() => {
    console.log('Value', props.search); // Log the search query to the console
    if(props.filter === 'all'){
      return posts.filter(post =>
        t(`blogPage.posts.${post.title}`).toLowerCase().includes(props.search.toLowerCase()) ||
        t(`blogPage.posts.${post.excerpt}`).toLowerCase().includes(props.search.toLowerCase())
      );
    }else{
      return posts.filter((post) => post.category === props.filter)
    }

  });

  const postsPerPage = 3;
  const paginatedPosts = computed(() => {
    const start = (props.currentPage - 1) * postsPerPage;
    const end = start + postsPerPage;
    return filteredPosts.value.slice(start, end);
  })

</script>

<style scoped>
.featured{
  display:grid;grid-template-columns:1.08fr .92fr;background:#fff;margin-bottom:32px
}
.featured-image{min-height:330px}
.featured-copy{padding:38px}
.featured-copy .kicker{font-size:10px}
.featured-copy h2{font-size:32px;line-height:1.08;letter-spacing:-.04em;margin:12px 0 15px}
.meta{font-size:11px;color:var(--muted);margin-bottom:16px}
.excerpt{font-size:13px;color:var(--muted);margin-bottom:22px}
.read-more{font-size:12px;font-weight:600;text-decoration:underline;text-underline-offset:5px}


.post-list{display:grid;gap:18px}
.post-card{
  display:grid;grid-template-columns:190px 1fr;gap:22px;background:#fff;padding:14px
}
.post-card img{height:150px}
.post-card h2{font-size:19px;line-height:1.15;margin:4px 0 8px}
.post-card p{font-size:12px;color:var(--muted)}
.post-card .meta{margin-bottom:0}

@media(max-width:650px){
  .featured{grid-template-columns:1fr}
  .featured-image{min-height:250px}
  .post-card{grid-template-columns:1fr}
  .post-card img{height:220px}
  .newsletter{align-items:flex-start;flex-direction:column}
  .newsletter form{width:100%;min-width:0}
}

</style>
