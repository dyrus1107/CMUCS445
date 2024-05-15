<template>
  <Dialog>
    <DialogTrigger as-child>
      <Button
        variant="outline"
        @click="showDialog = !showDialog"
        class="w-auto h-auto p-0"
      >
        <font-awesome-icon class="w-4 h-4" :icon="['fas', 'plus']" />Add new
      </Button>
    </DialogTrigger>

    <DialogContent class="sm:max-w-[80%]" v-if="showDialog">
      <DialogHeader>
        <DialogTitle>Add New Row</DialogTitle>
      </DialogHeader>

      <DialogDescription>
        Fill in the details for the new row.
      </DialogDescription>

      <div class="grid grid-cols-2 gap-4 py-4">
        <!-- Input fields for each property -->
        <div class="grid items-center grid-cols-4 gap-4">
          <Label for="firstName" class="text-right"> First Name </Label>
          <Input
            id="firstName"
            v-model="newEmployee.firstName"
            class="col-span-3"
          />
        </div>

        <div class="grid items-center grid-cols-4 gap-4">
          <Label for="lastName" class="text-right"> Last Name </Label>
          <Input
            id="lastName"
            v-model="newEmployee.lastName"
            class="col-span-3"
          />
        </div>

        <div class="grid items-center grid-cols-4 gap-4">
          <Label for="vacationDays" class="text-right"> Vacation Days </Label>
          <Input
            id="vacationDays"
            v-model="newEmployee.vacationDays"
            class="col-span-3"
            type="number"
          />
        </div>

        <div class="grid items-center grid-cols-4 gap-4">
          <Label for="paidToDate" class="text-right"> Paid To Date </Label>
          <Input
            id="paidToDate"
            v-model="newEmployee.paidToDate"
            class="col-span-3"
          />
        </div>

        <div class="grid items-center grid-cols-4 gap-4">
          <Label for="paidLastYear" class="text-right"> Paid Last Year </Label>
          <Input
            id="paidLastYear"
            v-model="newEmployee.paidLastYear"
            class="col-span-3"
            type="number"
          />
        </div>

        <div class="grid items-center grid-cols-4 gap-4">
          <Label for="payRate" class="text-right"> Pay Rate </Label>
          <Input
            id="payRate"
            v-model="newEmployee.payRate"
            class="col-span-3"
            type="number"
          />
        </div>

        <div class="grid items-center grid-cols-4 gap-4">
          <Label for="payRateId" class="text-right"> Pay Rate ID </Label>
          <Input
            id="payRateId"
            v-model="newEmployee.payRateId"
            class="col-span-3"
            type="number"
          />
        </div>

        <div class="grid items-center grid-cols-4 gap-4">
          <Label for="address" class="text-right"> Address </Label>
          <Input
            id="address"
            v-model="newEmployee.Address1"
            class="col-span-3"
            type="string"
          />
        </div>
        <div class="grid items-center grid-cols-4 gap-4">
          <Label for="city" class="text-right"> City </Label>
          <Input
            id="city"
            v-model="newEmployee.City"
            class="col-span-3"
            type="string"
          />
        </div>
        <div class="grid items-center grid-cols-4 gap-4">
          <Label for="zip" class="text-right"> Zip Code </Label>
          <Input
            id="zip"
            v-model="newEmployee.Zip"
            class="col-span-3"
            type="string"
          />
        </div>
        <div class="grid items-center grid-cols-4 gap-4">
          <Label for="email" class="text-right"> Email </Label>
          <Input
            id="email"
            v-model="newEmployee.Email"
            class="col-span-3"
            type="string"
          />
        </div>
        <div class="grid items-center grid-cols-4 gap-4">
          <Label for="phoneNumber" class="text-right"> Phone Number </Label>
          <Input
            id="phoneNumber"
            v-model="newEmployee.Phone_Number"
            class="col-span-3"
            type="string"
          />
        </div>
        <div class="grid items-center grid-cols-4 gap-4">
          <Label for="SSN" class="text-right"> SSN </Label>
          <Input
            id="SSN"
            v-model="newEmployee.Social_Security_Number"
            class="col-span-3"
            type="string"
          />
        </div>
        <div class="grid items-center grid-cols-4 gap-4">
          <Label for="Drivers_License" class="text-right">
            Driver License
          </Label>
          <Input
            id="Drivers_License"
            v-model="newEmployee.Drivers_License"
            class="col-span-3"
            type="string"
          />
        </div>
        <div class="grid items-center grid-cols-4 gap-4">
          <Label for="Marital_Status" class="text-right">
            Marital Status
          </Label>
          <Input
            id="Drivers_License"
            v-model="newEmployee.Marital_Status"
            class="col-span-3"
            type="string"
          />
        </div>
        <div class="grid items-center grid-cols-4 gap-4">
          <Label for="Shareholder_Status" class="text-right">
            Shareholder Status
          </Label>
          <Input
            id="Shareholder_Status"
            v-model="newEmployee.Shareholder_Status"
            class="col-span-3"
            type="number"
          />
        </div>
      </div>

      <DialogFooter>
        <Button type="submit" @click="addNewRow"> Add Row </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
<script setup>
import axios from "axios";
import { ref } from "vue";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { faker } from "@faker-js/faker";
import socket from "@/socket";

const showDialog = ref(false);
const newEmployee = ref({
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  vacationDays: faker.number.int({ min: 0, max: 30 }),
  paidToDate: faker.number.int({ min: 20, max: 10000 }),
  paidLastYear: faker.number.int({ min: 1000, max: 10000 }),
  payRate: faker.number.float({ min: 1, max: 3 }),
  payRateId: faker.number.int({ min: 1, max: 4 }),
  Address1: faker.location.streetAddress(),
  City: faker.location.city(),
  Zip: faker.number.int({ min: 10000, max: 999999 }),
  Email: faker.internet.email(),
  Phone_Number: faker.phone.imei(),
  Social_Security_Number: faker.phone.imei("#########"),
  Drivers_License: faker.phone.imei("########"),
  Marital_Status: faker.string.binary(),
  Shareholder_Status: faker.number.int({ min: 0, max: 1 }),
});


const emits = defineEmits(["add-row"]);
const addNewRow = async () => {
  try {
    const employeeId = faker.number.int({ min: 10000, max: 100000000 });
    // await axios.post("/api/employee", {
    //   ...newEmployee.value,
    //   employeeId,
    // });
    const data = { ...newEmployee.value, employeeId };
    // emits("add-row", newEmployee.value);
    socket.emit("add", data);
    newEmployee.value = {
      firstName: "",
      lastName: "",
      vacationDays: 0,
      paidToDate: 0,
      paidLastYear: 0,
      payRate: 0,
      payRateId: 0,
      Address1: "",
      City: "",
      Zip: "",
      Email: "",
      Phone_Number: "",
      Social_Security_Number: "",
      Drivers_License: "",
      Marital_Status: false,
      Shareholder_Status: 0,
    };
    showDialog.value = false; // Close the dialog
  } catch (error) {
    console.error(error);
  }
};
</script>
