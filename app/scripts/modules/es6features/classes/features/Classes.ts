import {FeatureInterface} from "./FeatureInterface";

export class Classes implements FeatureInterface {
  constructor() {
    this.classDefinition()
    this.classInheritance()
    this.classInheritanceFromExpression()
  }


  classDefinition() {
    class Shape {
      // had to add ts class property definitions for proper compilation
      x: any
      y: any
      id: any

      constructor (id, x, y) {
        this.id = id
        this.move(x, y)
      }
      move (x, y) {
        this.x = x
        this.y = y
      }
    }
  }


  classInheritance() {
    class Rectangle extends Shape {
      // had to add ts class property definitions for proper compilation
      width: any
      height: any

      constructor (id, x, y, width, height) {
        super(id, x, y)
        this.width  = width
        this.height = height
      }
    }
    class Circle extends Shape {
      // had to add ts class property definitions for proper compilation
      radius: any

      constructor (id, x, y, radius) {
        super(id, x, y)
        this.radius = radius
      }
    }
  }


  classInheritanceFromExpression() {
    /*
    // have to declare proper type
    var aggregation = (baseClass: FunctionConstructor, ...mixins) => {
      let base = class _Combined extends baseClass {
        constructor (...args) {
          super(...args)
          mixins.forEach((mixin) => {
            mixin.prototype.initializer.call(this)
          })
        }
      }

      Object["getOwnPropertySymbols"] = function(){ return "someproperty" }

      let copyProps = (target, source) => {
        Object.getOwnPropertyNames(source)
          .concat(Object.getOwnPropertySymbols(source))
          .forEach((prop) => {
            if (prop.match(/^(?:constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/))
              return
            Object.defineProperty(target, prop, Object.getOwnPropertyDescriptor(source, prop))
          })
      }
      mixins.forEach((mixin) => {
        copyProps(base.prototype, mixin.prototype)
        copyProps(base, mixin)
      })
      return base
    }

    class Colored {
      // ts class properties declaration
      _color: any

      initializer ()     { this._color = "white" }
      get color ()       { return this._color }
      set color (v)      { this._color = v }
    }

    class ZCoord {
      // ts class properties declaration
      _z: any

      initializer ()     { this._z = 0 }
      get z ()           { return this._z }
      set z (v)          { this._z = v }
    }

    class Shape {
      // ts class properties declaration
      _x: any
      _y: any

      constructor (x, y) { this._x = x; this._y = y }
      get x ()           { return this._x }
      set x (v)          { this._x = v }
      get y ()           { return this._y }
      set y (v)          { this._y = v }
    }

    class Rectangle extends aggregation(Shape, Colored, ZCoord) {}

    var rect = new Rectangle(7, 42)
    rect.z     = 1000
    rect.color = "red"
    console.log(rect.x, rect.y, rect.z, rect.color)
    */
  }

  baseClassAccess() {
    class Shape {
      id: any
      constructor(id, x, y){}
      toString () {
        return `Shape(${this.id})`
      }
    }
    class Rectangle extends Shape {
      constructor (id, x, y, width, height) {
        super(id, x, y)
      }
      toString () {
        return "Rectangle > " + super.toString()
      }
    }
    class Circle extends Shape {
      constructor (id, x, y, radius) {
        super(id, x, y)
      }
      toString () {
        return "Circle > " + super.toString()
      }
    }
  }

  staticMembers() {
    class Rectangle extends Shape {
      constructor(a,b,c,d,e) { super(a,b,c) }
      static defaultRectangle () {
        return new Rectangle("default", 0, 0, 100, 100)
      }
    }
    class Circle extends Shape {
      constructor(a,b,c,d) { super(a,b,c) }
      static defaultCircle () {
        return new Circle("default", 0, 0, 100)
      }
    }
    var defRectangle = Rectangle.defaultRectangle()
    var defCircle    = Circle.defaultCircle()
  }

  getterSetter() {
    class Rectangle {
      _width: any
      _height: any

      constructor (width, height) {
        this._width  = width
        this._height = height
      }
      set width  (width)  { this._width = width               }
      get width  ()       { return this._width                }
      set height (height) { this._height = height             }
      get height ()       { return this._height               }
      get area   ()       { return this._width * this._height }
    }
    var r = new Rectangle(50, 20)
    r.area === 1000
  }
}

// added here to be available in classInheritance() method
class Shape {
  // had to add ts class property definitions for proper compilation
  x: any
  y: any
  id: any

  constructor (id, x, y) {
    this.id = id
    this.move(x, y)
  }
  move (x, y) {
    this.x = x
    this.y = y
  }
}
