import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "sip-cs",
  brokers: ["localhost:9092"],
});

export const producer = kafka.producer();

export const startProducer = async () => {
  await producer.connect();
  await producer.sendBatch(
    {
      topic: "dashboard",
      partition: 0,
      messages: [{ value: "Hello Dashboard user!" }],
    },
    {
      topic: "hr",
      partition: 1,
      messages: [{ value: "Hello HR user!" }],
    }
  );
};

// await producer.connect();
// await producer.send({
//   topic: "test-topic",
//   messages: [{ value: "Hello KafkaJS user!" }],
// });
