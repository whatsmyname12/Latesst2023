app.use(cors());
app.get("/", (req, res) => {
	res.setHeader("Access-Control-Allow-Credentials","true");
	res.send("API is running.. ");
});