const express = require("express");
const app = express();
app.use(express.json());

let data = [
  {
    id: "1",
    name: "xiomi",
    email: "xiomi@mail.com",
  },
];

app.get("/", (req, res) => {
  res.json(data);
});

app.post("/post", (req, res) => {
  let newData = req.body;
  // console.log(newData)
  data.push(newData);
  res.json({ message: "data saved successfully.." });
});

app.put("/put", (req, res) => {
  //     const id = req.body.id
  //  console.log(id)
  let flag = 0;
  data.map((item) => {
    if (item.id === req.body.id) {
      item.name = req.body.name;
      item.email = req.body.email;
      flag = 1;
    }
  });
  if (flag == 1) {
    res.json({ message: "record updated successfully" });
  } else {
    res.json({ error: "record not found" });
  }
});

app.delete("/delete", (req, res) => {
  const id = req.body.id;
  console.log(id);
  let flag = 0;
  let newData;
  data.map((item) => {
    if (item.id === req.body.id) {
      data.pop(item);
      flag = 1;
    }
  });
  // console.log(newData)
  if (flag == 1) {
    res.json({ message: "record removed successfully" });
  } else {
    res.json({ error: "record not found" });
  }
});

app.listen(4000, () => {
  console.log("server is running");
});
