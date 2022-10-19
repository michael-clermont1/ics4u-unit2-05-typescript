/**
 * This class creates a vehicle
 *
 * By:      Michael Clermont
 * Version: 1.0
 * Since:   2022-10-17
 */

class Vehicle {
  // the Vehicle class has five fields
  private speed: number = 0
  readonly maxspeed: number
  readonly doors: number
  private plate: string
  private color: string

  constructor(color: string, plate: string, doors: number, maxspeed: number) {
    this.plate = plate
    this.color = color
    this.doors = doors
    this.maxspeed = maxspeed
  }

  // getters
  public getSpeed(): number {
    return this.speed
  }

  public getMaxSpeed(): number {
    return this.maxspeed
  }

  public getDoors(): number {
    return this.doors
  }

  public getPlate(): string {
    return this.plate
  }

  public getColor(): string {
    return this.color
  }

  // setters
  public setPlate(somePlate: string): void {
    this.plate = somePlate
  }

  public setColor(someColor: string): void {
    this.color = someColor
  }

  public accelerate(accelerationPower: number, accelerationTime: number): void {
    this.speed = accelerationPower * accelerationTime + this.speed

    if (this.speed > this.maxspeed) {
      this.speed = this.maxspeed
    }
  }

  public break(breakPower: number, breakTime: number): void {
    this.speed = this.speed - breakPower * breakTime

    if (this.speed < 0) {
      this.speed = 0
    }
  }

  public status(): void {
    console.log(
      `        --> Speed: ${this.speed}
        --> MaxSpeed: ${this.maxspeed}
        --> Number of doors: ${this.doors}
        --> License Plate: ${this.plate}
        --> Color: ${this.color}`
    )
  }
}

export = Vehicle
