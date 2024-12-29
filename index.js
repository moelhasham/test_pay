import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express()
app.use(express.json())
app.use(cors())



app.get("/api" , (req,res) => {
  const user = [
    {
      name:"mohammed",
    },
    {
      name:"ahmed",
    }
  ]
  res.status(200).json({status:"success" , data:user})
})

app.get("/items" , (req,res) => {
  const categories = [
    { 
      id: "1fgffghh", 
      name: "Electronics", 
      image: "https://www.svgrepo.com/show/530571/conversation.svg" 
    },
    { 
      id: "2", 
      name: "Fashion", 
      image: "https://www.svgrepo.com/show/530571/conversation.svg" 
    },
    { 
      id: "3", 
      name: "Home & Garden", 
      image: "https://www.svgrepo.com/show/530571/conversation.svg" 
    },
    { 
      id: "4", 
      name: "Sports", 
      image: "https://www.svgrepo.com/show/530571/conversation.svg" 
    },
    { 
      id: "100", 
      name: "Toys & Games", 
      image: "https://image.similarpng.com/very-thumbnail/2020/05/Icon-WhatsApp-PNG.png" 
    },
  ];
  
  
  const items = [
    { id: 1, name: "Item 1", price: 10.99 },
    { id: 2, name: "Item 2", price: 9.99 },
    { id: 3, name: "Item 3", price: 12.99 }
  ];
  
  res.status(200).json({status:"success" , items:items , categories: categories})
})


app.post("/paynow", async (req, res) => {
    const URL = " https://pgw.almadar.ly/api/Validate"
    const Msisdn = "918980076";
    const BirthYear = "2000";
    const InvoiceNo = "241120";
    const Amount = 50;
    const Category = 5;
  
    try {
      // Use the Fetch API to make a POST request
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer " +
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiU2FkYWRQR1ciLCJjb3Jwb3JhdGVTZXJ2aWNlSWQiOjIzOTksImFwcElkIjoiMTQxZTNiMDY4MDQ5NDk0Y2E5Mjc4YjY2ZmUzMGU2OWYiLCJleHAiOjIwMzAyNjczNjUsImlzcyI6IkNvcmV0ZWMiLCJhdWQiOiJTQURBRFBHVyJ9.PSvwNOLznVSVFg5uJofg812gcj9zfAZnkCMw7gCfgqw",
        },
        body: JSON.stringify({
          Msisdn,
          BirthYear,
          InvoiceNo,
          Amount,
          Category,
        }),
      });
  
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
      }
  
      const data = await response.json();
  
      // Respond with the data received from the external API
      res.status(200).json(data);
    } catch (error) {
      console.error("Error in /pay endpoint:", error.message);
      res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
  });
  
  
  
  app.listen(2001 , () => {
    console.log("run")
  })