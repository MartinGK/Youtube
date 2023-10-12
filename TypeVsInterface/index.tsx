import React from "react";

//----------------------------------------------------------------//

// example of type alias vs interface
// ejemplo de type alias vs interface

// type TUserProps = {
//     name: string;
//     id: string;
// }

// interface IUserProps {
//     name: string;
//     id: string;
// }

// export default function User({ name, id }: TUserProps) {
//   return <div id={id}>{name}</div>;
// }

//----------------------------------------------------------------//

//combining a base with additional properties
//combinando una base con propiedades adicionales

//intersections
//Para type usamos intersecciones

// type UserProps = {
//     name: string;
//     id: string;
// }

// type AdminProps = UserProps & {
//     role: string;
// }

// extending
// para interfaces extendemos

// interface IUserProps {
//   name: string;
//   id: string;
// }

// interface IAdminProps extends IUserProps {
//   role: string;
// }

// remarcar tamaño de errores

// const adminUser: AdminProps = {};
// const adminUser: IAdminProps = {};

//----------------------------------------------------------------//

// interface can only describe an object
// type alias can describe objects AND everything else (example gratie: primitive values such string, number or boolean)

// las interfaces solo pueden describir objetos.
// el alias type puede describir objectos Y todo lo demas (ejemplo: valores primitivos como string, number o boolean)

// | union type

// type Name = string;
type Name = string | string[];

// const name: Name = ['Martin'];

// interface Name = string; // X
// interface Name {
//   name: string;
// }


//----------------------------------------------------------------//

//type alias can easily use utility types - interface can too but only with ugly syntax
// la palabra reservaba type puede usar facilmente utility types - intarface tambien pero con una sintaxis bastante fea.

// type UserProps = {
//   name: string;
//   id: string;
//   createdAt: Date;
// };

// type GuestProps = Omit<UserProps, "name" | "id">;
// interface GuestProps extends Omit<UserProps, "name" | "id"> {};

// const guest: GuestProps = {};

// More about utility types here: https://www.typescriptlang.org/docs/handbook/utility-types.html
// Mas sobre utility types aqui: https://www.typescriptlang.org/docs/handbook/utility-types.html

//----------------------------------------------------------------//

// type alias can easily describe tuples - interface can too but only with ugly syntax
// la palabra reservada type describe facilmente tuplas mientras que interface puede hacerlo tambien pero con una sintaxis horrible en comparacion.

// type Address = [number, string];

// interface Address extends Array<number | string> {
//     0: number;
//     1: string;
// }

// const address: Address = [1,"street"];

//----------------------------------------------------------------//

//Extracting type from an object
// Extrayendo un tipo desde un objecto

// const project = {
//   title: "Project 1",
//   specification: {
//     areaSize: 100,
//     rooms: 3,
//   } as const,
// };

// type Project = typeof project;
// type Specification = typeof project.specification;

//----------------------------------------------------------------//

// interfaces can be merged
// interfaces are open and type aliases are closes
// Las interfaces son abiertas y los types son cerrados

// interface User {
//     name: string;
//     id: string;
// }

// interface User {
//     role: string;
// }

// multiple declarations make a code smells
// multiples declaraciones dan olor al codigo

// const user: User = {
//     name: "Martin",
// }

// type User = {
//   name: string;
//   id: string;
// };

// type User = {
//   role: string;
// };

// debemos usar el intersection type

// type AdminUser = User & {
//   role: string;
// };

// const user: AdminUser = {
//     name: "Martin",
//     id: "1",
//     role: "admin"
// }

//----------------------------------------------------------------//

// type can be used for classes too
// type puede ser usado en clases tambien
// es comun ver codigo donde se utilizan las interfaces para la declaracion de las variables de una clase, pero tambien se puede utilizar type.

// interface IUser {
//     name: string;
//     id: string;
// }

// type TUser = {
//     name: string;
//     id: string;
// }

// class User implements IUser {
//   name: string;
//   id: string;

//   constructor(name: string, id: string) {
//     this.name = name;
//     this.id = id;
//   }
// }

//----------------------------------------------------------------//

// type vs interface

// type = 4
// interface = 9

