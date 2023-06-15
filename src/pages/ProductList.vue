<template>


  <!-- Page Header -->
  <div class="block justify-between page-header sm:flex">
    <div>
      <h3 class="text-gray-700 hover:text-gray-900 dark:text-white dark:hover:text-white text-2xl font-medium">
        Products</h3>
    </div>
    <ol class="flex items-center whitespace-nowrap min-w-0">
      <li class="text-sm">
        <a class="flex items-center font-semibold text-primary hover:text-primary dark:text-primary truncate"
           href="javascript:void(0);">
          Product
          <i class="ti ti-chevrons-right flex-shrink-0 mx-3 overflow-visible text-gray-300 dark:text-gray-300 rtl:rotate-180"></i>
        </a>
      </li>
      <li class="text-sm text-gray-500 hover:text-primary dark:text-white/70 " aria-current="page">
        Product
      </li>
    </ol>
  </div>
  <!-- Page Header Close -->


  <!-- Table -->
  <div class="box">

    <div class="box-header sm:flex sm:justify-between space-y-3 sm:space-y-0">
      <h5 class="box-title my-auto">Products List</h5>
      <RouterLink :to="{name:'create-product'}" class="ti-btn ti-btn-primary m-0 py-2 mx-1">
        <i class="ri ri-add-line"></i>
        Add Product
      </RouterLink>
    </div>

    <div class="box-body">

      <div class="xl:flex xl:justify-between space-y-3 xl:space-y-0">
        <div class="sm:flex sm:space-x-3 space-y-3 sm:space-y-0 rtl:space-x-reverse">
          <div class="relative max-w-xs">
            <label for="hs-table-search" class="sr-only">
              search
            </label>
            <input type="text" name="hs-table-search" id="hs-table-search" v-model="keyWord"
                   class="px-3 py-2 ltr:pr-10 rtl:pl-10 ti-form-input" placeholder="search  by name or type">
            <div
                class="absolute inset-y-0 ltr:right-0 rtl:left-0 flex items-center pointer-events-none ltr:pr-4 rtl:pl-4">
              <i class="ri-search-line text-gray-500 dark:text-white/70"></i>
            </div>
          </div>


        </div>
        <div class="sm:space-x-3 sm:flex space-y-3 sm:space-y-0 rtl:space-x-reverse">

          <div class="inline-flex">
            <div
                class="px-4 py-2 inline-flex items-center min-w-fit ltr:rounded-l-sm rtl:rounded-r-sm border ltr:border-r-0 rtl:border-l-0 border-gray-200 bg-gray-50 dark:bg-black/20 dark:border-white/10">
              <span class="text-sm text-gray-500 dark:text-white/70"><i class="ri ri-calendar-line"></i></span>
            </div>

            <input type="text" v-model="created_at"
                   class="px-3 py-2 ti-form-input ltr:rounded-l-none rtl:rounded-r-none focus:z-10 flatpickr-input"
                   id="daterange" placeholder="Filter by created at" readonly="readonly">

            <button aria-label="button" type="button" @click="onClickRefresh"
                    class="ti-btn px-3 py-2 ti-btn-outline border-gray-200 text-gray-500 dark:text-white/70 hover:text-white hover:bg-gray-500 hover:border-gray-500 focus:ring-gray-200  dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10 m-0">
              <i class="ri-refresh-line leading-none text-lg"></i>
            </button>
          </div>

          <div class="inline-flex">
            <button @click="filterIsVisible=!filterIsVisible" type="button"
                    :class="`ti-btn ti-btn-${ filterIsVisible ? 'outline-primary' : 'soft-primary' } mt-0`">
              Filter
              <i :class="`ti ti-chevrons-${filterIsVisible  ? 'up' : 'down'}`"></i>
            </button>

          </div>

        </div>
      </div>

      <!-- Start Filters -->
      <div v-show="filterIsVisible">

        <!-- Add your filters here -->
        <div class="grid grid-cols-12 gap-x-6 mt-5">

          <div class="col-span-12 sm:col-span-3">
            <label class="ti-form-select-label">Name</label>
            <input class="ti-form-input" type="text" v-model="name">
          </div>
          <div class="col-span-12 sm:col-span-3">
            <label class="ti-form-select-label">type</label>
            <input class="ti-form-input" type="text" v-model="type">
          </div>

          <div class="col-span-12 sm:col-span-3">
            <label class="ti-form-select-label">price min</label>
            <input class="ti-form-input" type="number" v-model="priceMin">
          </div>

          <div class="col-span-12 sm:col-span-3">
            <label class="ti-form-select-label">price max</label>
            <input class="ti-form-input" type="number" v-model="priceMax">
          </div>

        </div>
        <div class="grid grid-cols-12 gap-x-6 mt-5">

          <div class="col-span-12 sm:col-span-3">
            <label class="ti-form-select-label">size </label>
            <input class="ti-form-input" type="text" v-model="size">
          </div>


          <div class="col-span-12 sm:col-span-3">
            <label class="ti-form-select-label">quantity min</label>
            <input class="ti-form-input" type="number" v-model="quantityMin">
          </div>
          <div class="col-span-12 sm:col-span-3">
            <label class="ti-form-select-label">quantity max</label>
            <input class="ti-form-input" type="number" v-model="quantityMax">
          </div>

        </div>

        <!-- End Filters -->

        <!-- btns Apply and Reset -->
        <div class="col-span-12 xxl:col-span-12 mt-3 flex justify-between">
          <button type="button" class="ti-btn ti-btn-primary mt-0" @click="refresh">
            Apply
            <i class="ti ti-refresh"></i>
          </button>
          <button type="button" class="ti-btn ti-btn-outline-primary mt-0" @click="onClickResetFilters">
            Reset
            <i class="ti ti-x"></i>
          </button>
        </div>
        <!-- End btns Apply and Reset -->

      </div>
      <!-- End Filters -->

      <div class="whitespace-nowrap rounded-sm ti-custom-table-hover overflow-auto mt-5">
        <table class="ti-custom-table ti-custom-table-head  edit-table">
          <thead class="bg-gray-100 dark:bg-black/20">
          <tr class="">

            <th scope="col" class="dark:text-white/70">
              ID
            </th>
            <th scope="col" class="dark:text-white/70">
              Name
            </th>

            <th scope="col" class="dark:text-white/70">
              Size
            </th>
            <th scope="col" class="dark:text-white/70">
              Type
            </th>
            <th scope="col" class="dark:text-white/70">
              Price
            </th>
            <th scope="col" class="dark:text-white/70">
              Quantity
            </th>
            <th scope="col" class="dark:text-white/70">
              Create at
            </th>
            <th scope="col" class="dark:text-white/70">

            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(row , index) in products" :key="index"
              class="product-1 cursor-pointer">

            <td>
              #{{ row.id }}
            </td>
            <td>
              {{ row.name }}
            </td>
            <td>
              {{ row.size }}
            </td>
            <td>
              {{ row.type }}
            </td>
            <td>
              {{ row.price }}
            </td>
            <td>
              {{ row.quantity }}
            </td>

            <td>
              {{ moment(row.created_at).format('YYYY-MM-DD HH:mm:ss') }}
            </td>


            <td class="text-end font-medium">

              <div class="hs-tooltip ti-main-tooltip">
                <RouterLink :to="{name:'update-product',params:{ id:row.id  }}" aria-label="anchor"
                            class="w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-success hs-tooltip-toggle">
                  <i class="ti ti-pencil"></i>
                </RouterLink>
              </div>

              <div class="hs-tooltip ti-main-tooltip" @click="onClickDeleteProduct(row)"
                   data-hs-overlay="#hs-small-modal-delete">
                <div aria-label="anchor"
                     class="w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-danger hs-tooltip-toggle">
                  <i class="ti ti-trash"></i>
                </div>
              </div>

            </td>

          </tr>
          </tbody>
        </table>
      </div>
      <nav class="flex justify-end items-center space-x-2 rtl:space-x-reverse mt-5">
        <div role="button" @click="currentPage= 1"
             class="w-10 h-10 bg-transparent text-gray-500 hover:bg-primary hover:text-white p-2 inline-flex justify-center text-sm font-medium items-center gap-2 rounded-full">
          <span aria-hidden="true">«</span>
          <span class="sr-only">Previous</span>
        </div>

        <div role="button"
             v-for="page in pages"
             @click="onClickSelectPage(page)"
             :class="{'bg-primary text-white' : page === currentPage}"
             class="w-10 h-10 p-2 hover:bg-primary hover:text-white inline-flex items-center justify-center text-sm font-medium rounded-full"
             aria-current="page">
          {{ page }}
        </div>

        <div role="button" @click="currentPage= totalOfPages"
             class="w-10 h-10 bg-transparent text-gray-500 hover:bg-primary hover:text-white p-2 inline-flex justify-center text-sm font-medium items-center gap-2 rounded-full"
        >
          <span class="sr-only">Next</span>
          <span aria-hidden="true">»</span>
        </div>
      </nav>
    </div>
  </div>
  <!-- End Table -->

  <!-- Delete modal -->
  <div ref="deleteModalRef" id="hs-small-modal-delete" class="hs-overlay hidden ti-modal">
    <div class="hs-overlay-open:mt-7 ti-modal-box justify-center mt-0 ease-out">
      <div class="ti-modal-content !border-0">
        <div class="ti-modal-header bg-danger ">
          <h3 class="ti-modal-title !text-white ">
            Delete
          </h3>
          <button type="button" class="hs-dropdown-toggle ti-modal-close-btn !text-white"
                  data-hs-overlay="#hs-small-modal-delete">
            <span class="sr-only">Close</span>
            <svg class="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
                  fill="currentColor"/>
            </svg>
          </button>
        </div>
        <div class="ti-modal-body">
          <p class="mt-1 text-gray-800 dark:text-white/70">
            Wold you like to delete this product : {{ selectedProduct?.name }} ?
          </p>

        </div>
        <div class="ti-modal-footer">
          <button type="button"
                  class="hs-dropdown-toggle ti-btn ti-border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:ring-offset-white focus:ring-primary dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:focus:ring-offset-white/10"
                  data-hs-overlay="#hs-small-modal-delete">
            Cancel
          </button>
          <a @click="deleteProductModal" data-hs-overlay="#hs-small-modal-delete"
             class="ti-btn bg-danger text-white hover:bg-primary  focus:ring-primary  dark:focus:ring-offset-white/10"
             href="javascript:void(0);">
            Yes
          </a>
        </div>
      </div>
    </div>
  </div>
  <!-- Delete modal -->

</template>

<script setup>

import {computed, onMounted, ref} from "vue";

import '../assets/tailwind-dashboard/libs/choices.js/public/assets/scripts/choices.min.js';
import useProducts from "../services/useProducts.js";
import moment from 'moment';


const {products, errors, loading, fetchAllProducts, deleteProduct, currentPage, totalOfPages} = useProducts()

const filterIsVisible = ref(false);
// Define the filter variables using ref
const name = ref('');
const priceMin = ref(null);
const priceMax = ref(null);
const quantityMin = ref(null);
const quantityMax = ref(null);
const size = ref('');
const type = ref('');
const keyWord = ref('');
const created_at = ref(moment().format('YYYY-MM-DD'));

const selectedProduct = ref();

const status = ref(false);

// get displayed pages in pagination
const pages = computed(() => {
  let start = currentPage.value - 1;
  if (start <= 0) {
    start = 1;
  }

  let end = start + 2;
  if (end > totalOfPages.value) {
    end = totalOfPages.value;
  }

  const pageNumbers = [];
  for (let i = start; i <= end; i++) {
    pageNumbers.push(i);
  }

  return pageNumbers;

})

onMounted(() => {

  refresh();

  //For Date Range Picker
  flatpickr("#daterange", {
    mode: "range",
    dateFormat: "Y-m-d",
  });

  //To choose date
  flatpickr(".invoice-date", {});

});

const onClickRefresh = () => {
  refresh();
}

const refresh = async () => {

  let dates = created_at.value.split('to');

  await fetchAllProducts({
    // Filter by name
    name: name.value,
    // Filter by type
    type: type.value,
    created_at: {
      from: dates[0] + " 00:00:00",
      to: (dates.length > 1 ? dates[1] : dates[0]) + " 23:59:59",
    },
    price: {
      min: priceMin.value,
      max: priceMax.value
    },
    quantity: {
      min: quantityMin.value,               // Filter by quantity min
      max: quantityMax.value,               // Filter by quantity max
    },
    size: size.value,
    keyword: keyWord.value


  });

};


const onClickDeleteProduct = async (product) => {
  selectedProduct.value = product;
};
const deleteProductModal = async () => {
  status.value = await deleteProduct(selectedProduct.value.id);
  if (status.value === true) {
    await refresh();
    status.value = false
  }
}

const onClickResetFilters = () => {
  name.value = ''
  type.value = ''
  priceMin.value = null
  priceMax.value = null
  quantityMin.value = null
  quantityMax.value = null
  size.value = ''
  refresh();
}

const onClickSelectPage = (page) => {
  currentPage.value = page;
  refresh()
}

</script>

<style scoped>

</style>
