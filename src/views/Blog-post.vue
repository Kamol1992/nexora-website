<template>
  <main v-if="post" class="article-wrap">
  <header class="article-header">
    <div class="kicker">{{t(`posts.${post.category}`)}}</div>
    <h1>{{t(`posts.${post.title}`)}}</h1>
    <div class="meta">{{t(`posts.${post.date}`)}} · {{t(`posts.${post.readingTime}`)}}</div>
  </header>

  <img class="article-cover" :src="post.mainImage" :alt="t(`posts.${post.title}`)">

  <article class="article-content">
    <p>{{t(`posts.${post.intro.paragraph1}`)}}</p>
    <p>{{t(`posts.${post.intro.paragraph2}`)}}</p>

    <blockquote>{{t(`posts.${post.quote}`)}}</blockquote>

    <h2>{{t(`posts.${post.section1.title}`)}}</h2>

    <p>{{t(`posts.${post.section1.paragraph}`)}}</p>

    <img class="article-image" :src="post.photo" :alt="t(`posts.${post.title}`)">

    <h2>{{t(`posts.${post.section2.title}`)}}</h2>

    <p>{{t(`posts.${post.section2.paragraph1}`)}}</p>
    <p>{{t(`posts.${post.section2.paragraph2}`)}}</p>

    <h2>{{t(`posts.${post.section3.title}`)}}</h2>

    <p>{{t(`posts.${post.section3.paragraph1}`)}}</p>
    <p>{{t(`posts.${post.section3.paragraph2}`)}}</p>

    <div class="article-tags"><span>Architecture</span><span>Design</span><span>Residential</span><span>Ideas</span></div>
    <a class="back-blog" href="/blog">← {{t('blogPage.sidebar.BackToBlog')}}</a>
  </article>
</main>
</template>

<script setup>
  import { computed } from 'vue'
  import { useRoute} from 'vue-router'
  const route = useRoute()

  import { useI18n } from 'vue-i18n'
  const { t } = useI18n()

  import photo1 from '@/assets/images/blog/photo-living-room.avif'
  import photo2 from '@/assets/images/blog/photo-bed-room.avif'
  import photo3 from '@/assets/images/blog/photo-open-space.avif'
  import photo4 from '@/assets/images/blog/photo-living-and-kitchen-room.avif'
  import photoArticle1 from '@/assets/images/blog/photo-hose.avif'
  import photoArticle2 from '@/assets/images/blog/photo-kitchen.avif'
  import photoArticle3 from '@/assets/images/blog/photo-modern-living-room.avif'
  import photoArticle4 from '@/assets/images/blog/photo-small-house.avif'

  const posts = [
    {
      title: 'architecture-shapes-life.title',
      date: 'architecture-shapes-life.date',
      readingTime: 'architecture-shapes-life.readTime',
      category: 'architecture-shapes-life.category',
      slug: 'architecture-shapes-life',
      seoDescription: 'architecture-shapes-life.seoDescription',
      mainImage: photo4,
      photo: photoArticle1,
      intro: {
        paragraph1: 'architecture-shapes-life.intro.paragraph1',
        paragraph2: 'architecture-shapes-life.intro.paragraph2'
      },
      quote: 'architecture-shapes-life.quote',
      section1: {
        title: 'architecture-shapes-life.section1.title',
        paragraph: 'architecture-shapes-life.section1.paragraph',
      },
      section2: {
        title: 'architecture-shapes-life.section2.title',
        paragraph1: 'architecture-shapes-life.section2.paragraph1',
        paragraph2: 'architecture-shapes-life.section2.paragraph2'
      },
      section3: {
        title: 'architecture-shapes-life.section3.title',
        paragraph1: 'architecture-shapes-life.section3.paragraph1',
        paragraph2: 'architecture-shapes-life.section3.paragraph2'
      },
      tags: ['architecture-shapes-life.tags.tag1',
      'architecture-shapes-life.tags.tag2',
      'architecture-shapes-life.tags.tag3',
      'architecture-shapes-life.tags.tag4'
      ],
    },
    {
      title: 'sustainable-design-principles.title',
      date: 'sustainable-design-principles.date',
      readingTime: 'sustainable-design-principles.readTime',
      category: 'sustainable-design-principles.category',
      slug: 'sustainable-design-principles',
      seoDescription: 'sustainable-design-principles.seoDescription',
      mainImage: photo1,
      photo: photoArticle2,
      intro: {
        paragraph1: 'sustainable-design-principles.intro.paragraph1',
        paragraph2: 'sustainable-design-principles.intro.paragraph2'
      },
      quote: 'sustainable-design-principles.quote',
      section1: {
        title: 'sustainable-design-principles.section1.title',
        paragraph: 'sustainable-design-principles.section1.paragraph',
      },
      section2: {
        title: 'sustainable-design-principles.section2.title',
        paragraph1: 'sustainable-design-principles.section2.paragraph1',
        paragraph2: 'sustainable-design-principles.section2.paragraph2'
      },
      section3: {
        title: 'sustainable-design-principles.section3.title',
        paragraph1: 'sustainable-design-principles.section3.paragraph1',
        paragraph2: 'sustainable-design-principles.section3.paragraph2'
      },
      tags: ['sustainable-design-principles.tags.tag1',
      'sustainable-design-principles.tags.tag2',
      'sustainable-design-principles.tags.tag3',
      'sustainable-design-principles.tags.tag4'
      ],
    },
    {
      title: 'future-of-urban-living.title',
      date: 'future-of-urban-living.date',
      readingTime: 'future-of-urban-living.readTime',
      category: 'future-of-urban-living.category',
      slug: 'future-of-urban-living',
      seoDescription: 'future-of-urban-living.seoDescription',
      mainImage: photo2,
      photo: photoArticle3,
      intro: {
        paragraph1: 'future-of-urban-living.intro.paragraph1',
        paragraph2: 'future-of-urban-living.intro.paragraph2'
      },
      quote: 'future-of-urban-living.quote',
      section1: {
        title: 'future-of-urban-living.section1.title',
        paragraph: 'future-of-urban-living.section1.paragraph',
      },
      section2: {
        title: 'future-of-urban-living.section2.title',
        paragraph1: 'future-of-urban-living.section2.paragraph1',
        paragraph2: 'future-of-urban-living.section2.paragraph2'
      },
      section3: {
        title: 'future-of-urban-living.section3.title',
        paragraph1: 'future-of-urban-living.section3.paragraph1',
        paragraph2: 'future-of-urban-living.section3.paragraph2'
      },
      tags: ['future-of-urban-living.tags.tag1',
      'future-of-urban-living.tags.tag2',
      'future-of-urban-living.tags.tag3',
      'future-of-urban-living.tags.tag4'
      ],
    },
  ]
const post = computed(() => {
  return posts.find(p => p.slug === route.params.slug)
})

import { useSeo } from '@/composables/useSeo'

console.log(post.value.title)

  useSeo({
    title: t(`posts.${post.value.title}`),
    description: t(`posts.${post.value.seoDescription}`)
  })
</script>

<style>
.article-wrap{max-width:900px;margin:0 auto;padding:70px 0}
.article-header{max-width:780px;margin:0 auto 42px}
.article-header h1{font-size:clamp(40px,6vw,66px);line-height:1.03;letter-spacing:-.055em;margin:12px 0 18px}
.article-header .meta{font-size:12px}
.article-cover{width:100%;height:520px;margin-bottom:48px}
.article-content{max-width:720px;margin:auto}
.article-content p{font-size:16px;line-height:1.85;margin-bottom:22px}
.article-content h2{font-size:30px;line-height:1.1;letter-spacing:-.035em;margin:48px 0 18px}
.article-content blockquote{
  border-left:3px solid var(--accent);padding:8px 0 8px 22px;
  font-size:21px;line-height:1.45;margin:36px 0;color:#303333
}
.article-image{margin:34px 0;height:430px}
.article-tags{display:flex;flex-wrap:wrap;gap:8px;margin-top:38px}
.article-tags span{background:#e9e8e3;padding:7px 10px;font-size:10px}
.back-blog{display:inline-block;margin-top:35px;font-size:12px;text-decoration:underline;text-underline-offset:5px}

</style>
