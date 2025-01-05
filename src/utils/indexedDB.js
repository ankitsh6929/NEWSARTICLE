import { openDB } from "idb";

// Open or create an IndexedDB database
export const initDB = async () => {
  return await openDB("dashboardDB", 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains("articles")) {
        db.createObjectStore("articles", { keyPath: "id", autoIncrement: true });
      }
    },
  });
};

// Save data to IndexedDB
export const saveToIndexedDB = async (storeName, data) => {
  try {
    const db = await initDB();
    const tx = db.transaction(storeName, "readwrite");
    const store = tx.objectStore(storeName);
    await store.put(data);
    await tx.done;
  } catch (error) {
    console.error("Error saving to IndexedDB:", error.message);
  }
};

// Retrieve data from IndexedDB
export const getFromIndexedDB = async (storeName) => {
  try {
    const db = await initDB();
    const tx = db.transaction(storeName, "readonly");
    const store = tx.objectStore(storeName);
    const data = await store.getAll();
    await tx.done;
    return data;
  } catch (error) {
    console.error("Error retrieving from IndexedDB:", error.message);
    return [];
  }
};

// Delete data from IndexedDB
export const deleteFromIndexedDB = async (storeName, key) => {
  try {
    const db = await initDB();
    const tx = db.transaction(storeName, "readwrite");
    const store = tx.objectStore(storeName);
    await store.delete(key);
    await tx.done;
  } catch (error) {
    console.error("Error deleting from IndexedDB:", error.message);
  }
};
