<template>
  <div class="about-app">
    <div class="info-block bg-img">
      <div class="info-title">
        Приложение для решения текущих вопросов по дому онлайн
      </div>
      <div class="info-text">
        Поможет решить проблемы жителей дома в режиме реального времени, без дополнительных визитов и звонков в управляющую организацию
      </div>
      <div class="button-panel-app">
        <div class="button-try">
          Попробовать бесплатно
        </div>
        <div class="google-btn">
          <a href="https://play.google.com/store/apps/details?id=ru.roskvartal.myapartment">
            <img alt="Доступно в гугл" src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
  .about-app {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .info-block {
    min-height: 502px;
    color: #333;
    padding: 70px 0;
    height: 502px;
    background-color: rgb(171, 171, 246);
  }

  .info-title {
    font-family: "PT Serif", serif;
    font-size: 34px;
    font-weight: 700;
    line-height: 43px;
    margin-bottom: 17px;
    width: 50%;
    margin-left: 7rem;
  }

  .info-text {
    font-size: 21px;
    line-height: 26px;
    width: 40%;
    margin-left: 7rem;
  }

  .button-panel-app {
    display: flex;
    align-items: center;
    margin-top: 34px;
    margin-bottom: 27px;
    width: 51%;
    /* flex-grow: initial; */
    margin-left: 7rem;
  }

  .button-try {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 15px;
    text-align: center;
    text-decoration: none;
    line-height: 50px;
    display: block;
    padding: 0 28px;
    background-color: #e12351;
    -ms-border-radius: 4px;
    border-radius: 4px;
    color: #ffffff;
    margin: 18px 0 auto;
    cursor: pointer;
    border: none;
  }

  .google-btn img {
    width: 196px;
    height: 76px;
    margin-top: 4px;
  }
</style>
