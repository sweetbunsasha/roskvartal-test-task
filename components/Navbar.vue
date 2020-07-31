<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white header">
    <a class="navbar-brand" href="/">Моя Квартира</a>
    <div class="collapse navbar-collapse btn-nav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/rules">
            Правила
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/agreement">
            Соглашение
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/instruction">
            Инструкция
          </nuxt-link>
        </li>
      </ul>
      <button type="button" class="btn btn-outline-primary btn-lg enter-button">
        Войти
      </button>
    </div>
  </nav>
</template>

<style scoped>
  .header {
    /* display: flex;
    justify-content: space-beetwen; */
    box-shadow: 0 1px 6px 0 rgba(0,0,0,.14);
    height: 80px;
    padding: 0 32px;
  }

  .nav-item {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  .enter-button {
    padding: 10px 40px;
    border: 1px solid blue;
    border-radius: 30px;
    white-space: nowrap;
    color: black;
  }
</style>
