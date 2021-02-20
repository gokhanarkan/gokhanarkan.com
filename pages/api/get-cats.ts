export default async (req, res) => {
  const count = req.query.count;

  if (!count) {
    res.status(422);
    return res.json({
      error: "Please add how many cats you want to get with ?count={number}.",
    });
  }

  if (count > 50) {
    res.status(422);
    return res.json({
      error: "Don't you think that number is too big? (Max count can be 50)",
    });
  }

  const cats = [];

  for (let index = 0; index < count; index++) {
    const response = await fetch("https://api.thecatapi.com/v1/images/search");
    const data = await response.json();
    cats.push(data);
  }

  res.status(200);
  res.json({
    cats,
  });
};
