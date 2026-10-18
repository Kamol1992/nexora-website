<template>
<Baner />

<main class="container blog-layout">
  <div>
    <Posts
      :search="activeSearch"
      :current-page="currentPage"
      :filter="activeFilter"
    />
    <Pagination
      :current-page="currentPage"
      :total-posts="6"
      @change-page="currentPage = $event"
    />
  </div>
  <aside class="sidebar">
    <SearchBlog @search="searchFilter"/>
    <Categories @filter="updateFilter"/>
    <!-- <section class="sidebar-section">
      <h3>Categories</h3>
      <div class="categories">
        <a href="#">All</a><a href="#">Architecture</a><a href="#">Interior Design</a>
        <a href="#">Sustainability</a><a href="#">Design</a><a href="#">News</a>
      </div>
    </section> -->
    <RecentPosts />
  </aside>
</main>
<Newsletter />


</template>

<script setup>
  import Baner from '../components/sections/baner-subpage.vue'
  import Posts from '../components/sections/blog-posts-list.vue'
  import Pagination from '../components/sections/pagination-posts.vue'
  import Newsletter from '../components/sections/newsletter.vue'
  import SearchBlog from '../components/sections/search-blog.vue'
  import RecentPosts from '../components/sections/resents-posts.vue'
  import Categories from '../components/sections/blog-categories.vue'

  import { ref } from 'vue'
  import { useSeo } from '@/composables/useSeo'

  const activeSearch = ref('');
  const currentPage = ref(1);
  const activeFilter = ref('all');

  const updateFilter = (filter) => {
    activeFilter.value = filter
  }

  const searchFilter = (search)=>{
    activeSearch.value = search;
  }
  useSeo({
    title: 'Nexora — Blog',
    description: 'Explore Nexora\'s blog for insights on architecture, design, and sustainability. Stay updated with our latest articles and expert advice.'
  })

</script>

<style>

/* blog.css */
.blog-layout{
  display:grid;grid-template-columns:minmax(0,1fr) 270px;gap:55px;padding:65px 0 0
}
.sidebar{
  border-left:1px solid var(--line);padding-left:30px
}
/* .sidebar-section{margin-bottom:38px}
.sidebar h3{font-size:12px;margin-bottom:14px}
.search{
  width:100%;border:1px solid var(--line);background:#fff;padding:11px 12px;
  font-size:11px;outline:0
} */
.categories{display:grid;gap:8px}
.categories a{font-size:12px;color:var(--muted)}
.categories a:hover{color:var(--text)}
.recent{display:grid;gap:14px}
.recent-item{display:grid;grid-template-columns:55px 1fr;gap:10px}
.recent-item img{height:55px}
.recent-item strong{font-size:10px;line-height:1.25}
.recent-item span{display:block;color:var(--muted);font-size:9px;margin-top:3px}

/* .pagination{display:flex;gap:7px;margin-top:30px}
.pagination a{width:32px;height:32px;border:1px solid var(--line);display:grid;place-items:center;font-size:11px;background:#fff}
.pagination a.active{background:var(--dark);color:#fff;border-color:var(--dark)} */

.newsletter{
  margin-top:70px;background:#fff;border:1px solid var(--line);
  padding:28px;display:flex;justify-content:space-between;align-items:center;gap:25px
}
.newsletter h3{font-size:18px}
.newsletter p{font-size:11px;color:var(--muted)}
.newsletter form{display:flex;min-width:390px}
.newsletter input{border:1px solid var(--line);padding:12px;font-size:11px;flex:1}
.newsletter button{border:0;background:var(--accent);padding:0 18px;font-size:11px;font-weight:700}

@media(max-width:900px){
  .blog-layout{grid-template-columns:1fr}
  .sidebar{border-left:0;border-top:1px solid var(--line);padding:30px 0 0}
}


</style>
