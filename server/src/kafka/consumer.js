import { Kafka } from "kafkajs";
import { createEmployee1 } from "../controllers/employee.controller.js";

const kafka = new Kafka({
  clientId: "sip-cs",
  brokers: ["localhost:9092"],
});

export const consumer = kafka.consumer({ groupId: "sip" });

export const startConsumer = async io => {
  await consumer.connect();
  await consumer.subscribe({ topic: "sip", fromBeginning: true });
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const { method, data } = JSON.parse(message.value.toString());
      try {
        if (method === "create_success") {
          console.log("create_success", data);
          const res = await createEmployee1(data);
          io.emit("success_create", data);
        }
        // io.emit("delete", JSON.parse(message.value.toString()));
      } catch (error) {
        console.error("Error emitting Socket.IO event:", error);
      }
    },
  });
};
