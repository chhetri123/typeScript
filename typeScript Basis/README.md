# **TypeScript Basics**

## Core Types

- Number
- String
- Boolean

**The key difference is :JS uses" Dynamic types" and resolve at runtime .typeScript uses "Statics types" (set during development)**

- Working with Number , Boolean and String

- Type Assignment & Type Inference

```typescript
let num: number;
```

- ### Object type

  It is almost looks like object but it don't have key value pairs but key type pairs. Object types are clear to describe.

- ### Array type

```typescript
const name: string[];
const ages: number[];
```

- ### Working with tuples

```typescript
[1,2] // Added by typescript: fixed length array
const person[number,string]=[32,"manish"]

```

- ### Working with Enum

```typescript
enum {_new ,_old} //Added by typescript Automatically enumerated global constant
```

- ### Any types

  Any kinds of value ,non specific types
  Please make sure to update tests as appropriate.

- ### Union types

```typescript
let n: number | string;
```

- ### literal types
- ### Types Aliases Custom types

```typescript
type manish = string | number;
```

- ### Function Return types & void
- ### Function as Types

```typescript
function add(n:number,m:number):number{
....
}
let combine:Function;
combine =add
combine(5,6)
```

- ### Function Types and callback
- ### The unknown types
- ### The never types

## Other you can check in app.ts file
