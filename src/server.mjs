import build from "./app.mjs";

const PORT = process.env.PORT || 5555;

const server = build({
  logger: {
    level: "info",
  },
});

const start = async () => {
  try {
    await server.listen(PORT);
  } catch (error) {
    server.log.error(error.message);
    process.exit(1);
  }
};

start();
