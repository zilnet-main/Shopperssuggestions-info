export default {
  async fetch(request, env) {
    // The learning site is currently static. Keep the shared D1 binding available
    // for the later course/AI endpoints without changing existing platform tables.
    return env.ASSETS.fetch(request);
  }
};
