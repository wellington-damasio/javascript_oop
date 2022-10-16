# Object Oriented Programming Theory

## Objects
- Represent a Class
- Has properties that represent its own characteristics
- Has methods that represent its actions

## Classes
- Is the constructor/base of the object
- They're tipically used to create various objects derived from itself (the Class)
- Already has the properties and methods that the objects derived from it will use

## Encapsulation
- It's basically having a set of properties and methods to deal with the data inside the object
- You can have:
  1. Public methods
  2. Private methods
  3. Safe methods
- In JavaScript you have only public methods, but you can work your way around it
- Another way of looking at encapsulation it that certains methods and (usually the majority of) properties
within your object should be only available to be used inside the object

## Agregation
- Also known as Composition
- It's the act of combining multiple objects inside a bigger object
- By using composition, we can have less complex and smaller objects, simplifying the codebase
- Ex: Bigger Object Car -> Object Wheels + Object Seat + Object Engine

## Inheritance
- When an object or Class is derived from another Class
- When inheritance happens, the inherited object receives the properties and methods of a first object
- It's helpfull using inheritance when working with Classes that are similar to another but has a different 
task that needs other methods and properties too

## Polymorphism
- It's the possibility of using a method from a parent Class in a different manner when it is called on a child
Class/object
- The goal here is to make that parent Class method adapt itself to complete the task it needs to in the child
Class/object. We try to do it without changing the parents method
- Polymorphism uses the concept of inheritance to do its work

