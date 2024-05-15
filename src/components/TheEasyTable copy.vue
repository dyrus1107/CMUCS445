<template>
  <div class="mt-3 card">
    <div
      class="bg-white card-header header-elements-inline sticky-top"
      style="top: 54px"
    >
      <h3 class="card-title">All Partners</h3>
    </div>
    <div class="card-body">
      <span>search value: </span>
      <input type="text" class="mb-3" v-model="searchValue" />
      <EasyDataTable
        :headers="headers"
        :items="items"
        :header-item-class-name="headerItemClassNameFunction"
        :search-value="searchValue"
        v-model:items-selected="itemsSelected"
        rows-per-page="10"
        buttons-pagination="true"
        theme-color="#005E97"
        show-index
        alternating
      >
        <template #loading>
          <img
            src="https://i.pinimg.com/originals/94/fd/2b/94fd2bf50097ade743220761f41693d5.gif"
            style="width: 100px; height: 80px"
          />
        </template>
        <template #item-trainingPartner="item">
          <div class="d-flex flex-column">
            <div class="mb-0">
              <i class="fa-solid fa-circle-check text-success me-2"></i>
              {{ item.trainingPartner.isTraining }}
            </div>
            <div>
              <strong class="me-2">Training Center:</strong>
              {{ item.trainingPartner.number }}
            </div>
          </div>
        </template>
        <template #item-actions="item">
          <a
            href="javascript:void(0);"
            @click="deleteItem(item)"
            class="dropdown-item"
          >
            <i class="fa-duotone fa-pen-clip me-2"></i> Delete
          </a>
        </template>
      </EasyDataTable>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const searchValue = ref("");
const itemsSelected = ref([]);
const headers = [
  { text: "English Name", value: "englishName" },
  { text: "Arabic Name", value: "arabicName" },
  { text: "Sector", value: "sector", sortable: true },
  { text: "Subsector", value: "subsector", sortable: true },
  { text: "Training Partner", value: "trainingPartner" },
  {
    text: "Employment Partner",
    value: "employmentPartner",
    sortable: true,
  },
  { text: "Actions", value: "actions", width: 200 },
];
const items = ref([
  {
    englishName: "Saudi German Hospital",
    arabicName: "مستشفى السعودي الألماني",
    city: "Riyadh",
    sector: "Private",
    subsector: "Pediatrics",
    trainingPartner: {
      isTraining: "No",
      number: 6,
    },
    employmentPartner: "No",
    actions: "",
  },
  {
    englishName: "Dallah Hospital",
    arabicName: "مستشفى دلة ",
    city: "Riyadh",
    sector: "Private",
    subsector: "Pediatrics",
    trainingPartner: {
      isTraining: "Yes",
      number: 2,
    },
    employmentPartner: "Yes",
    actions: "",
  },
]);
const headerItemClassNameFunction = (header, index) => {
  return "alpha-primary text-primary font-weight-bold";
};

const deleteItem = itemToDelete => {
  const index = items.value.findIndex(
    item => item.englishName === itemToDelete.englishName
  );
  if (index !== -1) {
    items.value.splice(index, 1);
  }
};
</script>

<style>
#app {
  font-family: "Almarai", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-weight: 600;
  margin-top: 60px;
}
</style>
