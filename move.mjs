import json from "./qiita.json" assert { type: "json" };
import fs from "node:fs/promises";

for (const item of json) {
  const header = `---
title: "${item.title}"
emoji: ""
type: "tech"
topics: [${item.tags.map((t) => `\"${t.name}\"`)}]
published: false
published_at: ${item.created_at.replace("T", " ").slice(0,16)}
---
`;
  const body = item.body;
  fs.writeFile(`./articles/${item.id}.md`, header + "\n" + body);
}
