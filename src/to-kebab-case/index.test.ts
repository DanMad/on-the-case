import toKebabCase from './index';

global.String.prototype.toKebabCase = toKebabCase;

describe('toKebabCase', () => {
  it('Supports camel case transformation', () => {
    expect('fooBarBaz'.toKebabCase()).toBe('foo-bar-baz');
  });

  it('Supports pascal case transformation', () => {
    expect('FooBarBaz'.toKebabCase()).toBe('foo-bar-baz');
  });

  it('Supports sentence case transformation', () => {
    expect('Foo bar  baz'.toKebabCase()).toBe('foo-bar-baz');
  });

  it('Supports snake case transformation', () => {
    expect('foo_bar_baz'.toKebabCase()).toBe('foo-bar-baz');
  });

  it('Supports title case transformation', () => {
    expect('Foo Bar Baz'.toKebabCase()).toBe('foo-bar-baz');
  });
});