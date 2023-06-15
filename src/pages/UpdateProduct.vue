<template>

  <!-- Start::main-content -->

  <div class="block justify-between page-header sm:flex">
    <div>
      <h3 class="text-gray-700 hover:text-gray-900 dark:text-white dark:hover:text-white text-2xl font-medium">
        Product</h3>
    </div>
    <ol class="flex items-center whitespace-nowrap min-w-0">
      <li class="text-sm">
        <a class="flex items-center font-semibold text-primary hover:text-primary dark:text-primary truncate"
           href="javascript:void(0);">
          Edit Product
          <i class="ti ti-chevrons-right flex-shrink-0 mx-3 overflow-visible text-gray-300 dark:text-gray-300 rtl:rotate-180"></i>
        </a>
      </li>
      <RouterLink :to="{name:'product'}" class="text-sm text-gray-500 hover:text-primary dark:text-white/70 " aria-current="page">
        Products
      </RouterLink>
    </ol>
  </div>

  <div class="grid grid-cols-12 gap-x-6">
    <div class="col-span-12">
      <div class="box">
        <div class="box-header">
          <h5 class="box-title">Update Product</h5>
        </div>

        <div class="box-body">

          <div class="col-span-12 xl:col-span-9">
            <div class="box-body p-0">
              <div id="profile-settings-1" role="tabpanel" aria-labelledby="profile-settings-item-1">
                <div class="box border-0 shadow-none mb-0">
                  <div class="box-body">
                    <div>
                      <div class="grid lg:grid-cols-2 gap-8">
                        <div class="space-y-2">
                          <label class="ti-form-label mb-0">Name Product</label>
                          <input type="text" class="my-auto ti-form-input"
                                 :class="{'border-red-500' : errors.name}"
                                 placeholder="name product" v-model="product.name">
                          <div v-if="errors.name" class="invalid">
                            <span v-for="msg in errors.name" class="dobError text-red-500 text-xs hidden" style="display: block;">
                              {{ msg }}
                            </span>
                          </div>
                        </div>

                        <div class="space-y-2">
                          <label class="ti-form-label mb-0">Type Product</label>
                          <input type="text" class="my-auto ti-form-input"
                                 :class="{'border-red-500' : errors.type}"
                                 placeholder="type product"
                                 v-model="product.type">
                          <div v-if="errors.type" class="invalid">
                            <span v-for="msg in errors.type" class="dobError text-red-500 text-xs hidden" style="display: block;">
                              {{ msg }}
                            </span>
                          </div>
                        </div>
                        <div class="space-y-2">
                          <label class="ti-form-label mb-0">Price Product</label>
                          <input type="number" class="my-auto ti-form-input"
                                 :class="{'border-red-500' : errors.price}"
                                 placeholder="price "
                                 v-model="product.price">

                          <div v-if="errors.price" class="invalid">
                            <span v-for="msg in errors.price" class="dobError text-red-500 text-xs hidden" style="display: block;">
                              {{ msg }}
                            </span>
                          </div>
                        </div>
                        <div class="space-y-2">
                          <label class="ti-form-label mb-0">size Product</label>
                          <input type="text" class="my-auto ti-form-input"
                                 :class="{'border-red-500' : errors.size}"
                                 placeholder="size " v-model="product.size">
                          <div v-if="errors.size" class="invalid">
                            <span v-for="msg in errors.size" class="dobError text-red-500 text-xs hidden" style="display: block;">
                              {{ msg }}
                            </span>
                          </div>
                        </div>
                        <div class="space-y-2">
                          <label class="ti-form-label mb-0">Quantity Product</label>
                          <input type="number" class="my-auto ti-form-input"
                                 :class="{'border-red-500' : errors.quantity}"
                                 placeholder="quantity "
                                 v-model="product.quantity">
                          <div v-if="errors.quantity" class="invalid">
                            <span v-for="msg in errors.quantity" class="dobError text-red-500 text-xs hidden" style="display: block;">
                              {{ msg }}
                            </span>
                          </div>
                        </div>
                        <div class="space-y-2">
                          <label class="ti-form-label mb-0">Description Product</label>
                          <textarea type="text" class="my-auto ti-form-input"
                                    :class="{'border-red-500' : errors.description}" v-model="product.description"></textarea>
                          <div v-if="errors.description" class="invalid">
                            <span v-for="msg in errors.description" class="dobError text-red-500 text-xs hidden" style="display: block;">
                              {{ msg }}
                            </span>
                          </div>
                        </div>

                      </div>

                    </div>

                  </div>
                </div>
              </div>
            </div>

            <div class="box-footer text-end space-x-3 rtl:space-x-reverse">
              <a href="javascript:void(0);" @click="onClickUpdateProduct" class="ti-btn m-0 ti-btn-soft-primary"><i
                  class="ri ri-refresh-line"></i>
                save </a>
              <RouterLink  :to="{name:'product'}" class="ti-btn m-0 ti-btn-soft-secondary"><i
                  class="ri ri-close-circle-line"></i> cancel</RouterLink>
            </div>
          </div>
        </div>


      </div>
    </div>

  </div>

</template>

<script setup>


import useProducts from "../services/useProducts.js";
import {onMounted, ref} from "vue"
import router from "../router/index.js";

const {updateProduct, errors,fetchProductById } = useProducts()

const product = ref({})
const status=ref(false);
const props=defineProps({
    id:{
    type:String
  }});

  onMounted(async ()=>{
    product.value= await fetchProductById(props.id);
  });
const onClickUpdateProduct = async () => {
  product.value.id=props.id
  status.value = await updateProduct(product.value);
  if (status.value === true) {
    router.go(-1);
    status.value = false;
  }
};

</script>

<style scoped></style>
