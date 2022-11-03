//autobind decorator
export function autobind(
  _target: any,
  _methodName: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundeFn = originalMethod.bind(this);
      return boundeFn;
    },
  };
  return adjDescriptor;
}
