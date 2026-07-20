---
title: Electronics
description: A practical starting point for small electronics prototypes.
---

# Electronics

This section will collect practical notes for Arduino, ESP32, sensors, simple automation, wiring, PCB prototypes, and electronics enclosures.

> [!WARNING]
> The early guides focus on low-voltage DC projects. Do not use them as instructions for mains electricity, battery pack construction, or other high-energy systems.

## Before you connect power

- Write down the supply voltage and current limit.
- Check the pinout in the component's current datasheet.
- Confirm that connected devices share a common ground when required.
- Verify logic levels before connecting 5 V and 3.3 V devices.
- Add current limiting, fusing, polarity protection, or flyback protection where the load requires it.
- Inspect the wiring once with power disconnected.

## Prototype in layers

1. Test the power system by itself.
2. Bring up the controller with a minimal program.
3. Add one sensor or output at a time.
4. Record working pin assignments and library versions.
5. Test fault cases before moving the circuit into an enclosure.

## Guides in progress

- Arduino and ESP32 project structure
- Sensor wiring and signal checks
- Relays, motors, and inductive loads
- Moving from breadboard to soldered prototype
- Designing an enclosure around real connectors and service access
