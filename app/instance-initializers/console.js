export function initialize(appInstance) {
  appInstance.lookup('service:router').on('routeWillChange', () => {
    console.clear();
  });
}

export default {
  initialize,
};
