import { statusList } from "../statusList";

export function transformData(data) {
  const newData = { order: [] };
  for (const status of statusList) {
    newData.order.push(status);
    newData[status] = [];
    const tasks = data.filter((task) => task.status === status);
    if (tasks.length) {
      newData[status] = tasks;
    }
  }
  newData.tasks = data;
  return newData;
}
