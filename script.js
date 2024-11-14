// Initial list of items
const list = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8", "Item 9", "Item 10"];
const infiList = document.getElementById("infi-list");

// Function to add items to the list
function addItems(items) {
  items.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    infiList.appendChild(listItem);
  });
}

// Add initial items to the list
addItems(list);

// Track the current item number for adding new items
let itemCount = list.length;

// Function to add two new items when the user scrolls to the end
function addMoreItems() {
  const newItems = [
    `Item ${itemCount + 1}`,
    `Item ${itemCount + 2}`
  ];
  addItems(newItems);
  itemCount += 2;
}

// Event listener to detect when the user scrolls to the end of the list
infiList.addEventListener('scroll', () => {
  if (infiList.scrollTop + infiList.clientHeight >= infiList.scrollHeight) {
    addMoreItems();
  }
});
