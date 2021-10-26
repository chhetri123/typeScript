# **Advance Type**

- Intersect Type
- Type Guard
- Discriminated Union
- Type casting
- Function OverLoading
- Index Property
- Optional chaining
- Nullish Coalescing

---

### Watch out the code in **_Advance.ts_** file .Only theory is here

---

## <li><b> Intersect Type

- ### To Combine other type

## <li> <b>Type Guard

- ### It allows us to utilize the flexibility union type gives us and still ensure that code runs correctly at runtime [ For class check we use <i>instanceof</i> ]

- ### It is just a term that describe the idea or approach of checking if a certain property or method exist before you try to use it

## <li><b> Discriminated union

- ### It is a pattern working with uinon type that makes implementing type guard easier [for obejct type]
- ### It has a one common property in every obect that make Union

## <li> <b>Type casting

- ### It help to typeScript that some value is off specific type when typeScript is not able to detect it.Two types:

  - Infront of the thing we want to convert
  - after the thing we want to type cast

## <li> <b>Index Property

```typescript
	[prop:string]:string
	[prop:number]:string
	[prop:string]:number
```

- ### Which give the extra fleibility in a cpde that we don't know in advance which property name we want to use and how man property we need

## <li> <b> Function Overloading

- ### feature that allows us to use multiple function with same name

## <li> <b> Optional chaining

```typescript
const fetchedData = {
  id: "ui",
  name: "Chhetri",
  job: {
    title: "CEO",
    description: "My own company",
  },
};

console.log(fetchedData?.job?.title);
```

## <li> <b> Nullish Coalescing

```typescript
const userInput = "";
const storedData = userInput ?? "Default";

console.log(storedData);
```
