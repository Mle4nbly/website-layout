<template>
  <div class="filters">
    <div class="filters-search">
      <input class="filters-search__field" type="text" placeholder="Поиск">
      <button class="filters-search__btn">
        <img src="/icons/search-icon.svg" alt="search-icon">
      </button>
    </div>

    <div class="filters-select">
      <span class="filters-select__icon" />
      <select class="filters-select__field">
        <option>По алфавиту</option>
      </select>
      <button class="filters-select__btn">
        <img src="/icons/arrow-down.svg" alt="arrow-down">
      </button>
    </div>
  </div>
</template>

<style scoped>
.filters {
  display: flex;
  gap: 20px;

  text-wrap: nowrap;
}

.filters-search {
  width: 233px;

  padding: 12px 16px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 10px;

  background-color: rgb(242, 242, 242);

  overflow: hidden;

  font-size: 14px;
  font-weight: 400;
  letter-spacing: -1%;
}

.filters-search__field {
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -1%;
}

.filters-search__btn {
  display: flex;
  align-items: center;

  overflow: hidden;
}

.filters-select {
  width: 233px;

  padding: 12px 16px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 10px;

  background-color: rgb(242, 242, 242);

  font-size: 14px;
  font-weight: 400;
  letter-spacing: -1%;
}

.filters-select__btn {
  display: flex;
  justify-content: space-between;

  overflow: hidden;
}

.filters-select__icon {
  background: url("/icons/sorting-icon.svg") center/cover no-repeat;
  width: 16px;
  height: 16px;
}
</style>