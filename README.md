# QuantumCanvas

A browser-based quantum circuit composer and simulator with four visualization modes, smooth gate-application animations, and custom GLSL shaders.

Built with Vite, React, TypeScript, Three.js, and WebGL.

## Quick Start

```bash
npm install
npm run dev       # http://localhost:5173
npm test          # 137 tests
```

## Features

### Circuit Composer
Drag gates from the sidebar onto qubit wires. Drag placed gates to rearrange them. Right-click a gate to delete it, or select and press Delete. Multi-qubit gates (CNOT, CZ, SWAP, Toffoli) use a two-click flow: drop on the first qubit, then click the second. Parametric gates (Rx, Ry, Rz) open an angle dialog with presets and a custom input that understands expressions like `pi/4` and `3*pi/2`.

### Four Visualization Modes

**Amplitudes** — Canvas-rendered bar chart of |c_k|² for each basis state. Bar color encodes phase via a sunset gradient. Phase wheel indicators below each bar.

**Bloch Spheres** — Three.js scene with one sphere per qubit. Custom GLSL fragment shaders produce a volumetric glow where phase drives hue and purity drives intensity. A state vector arrow shows the Bloch vector. Entangled qubits are connected by animated dashed tendrils. Drag to rotate, scroll to zoom.

**Orbital Density** — WebGL fragment shader computing |ψ(x,z)|² by mapping each basis state to a hydrogen-like spatial mode function. Superpositions create visible interference patterns. Zoom and brightness controls in the corner.

**Abstract** — Ray-marched signed distance field. Each basis state with significant amplitude spawns a toroidal ring, with phase driving deformation and entanglement creating helical connecting geometry. The camera orbits slowly. Volumetric glow accumulation through the sunset colormap.

### QASM Code Editor
Toggle with the QASM button or press Escape to close. CodeMirror 6 with custom syntax highlighting. The editor syncs from the circuit when you drag gates, and you can write QASM directly and click Apply to update the visual circuit. Full QASM 2.0 support including parametric gates.

### Animation
Click Animate or press Space. Gates apply with smooth `cos(πt/2)·|ψ_i⟩ + sin(πt/2)·|ψ_f⟩` interpolation. Step forward/backward with arrow keys or the transport controls. Adjustable speed from 0.25× to 4×. Loop mode available.

### Export
- **QASM 2.0** — Standard quantum assembly (`Ctrl+E`)
- **Qiskit Python** — Ready-to-run script with numpy imports (`Ctrl+Shift+E`)
- **PNG Screenshot** — Captures the current visualization canvas
- **Circuit JSON** — Serialized circuit for save/share

### Preset Circuits
Organized by category:
- **Basics** — Bell State, GHZ State, Superposition, Bell Measurement
- **Algorithms** — Deutsch-Jozsa, Quantum Teleportation, QFT (3-qubit), Grover (2-qubit), Swap Test
- **Error Correction** — Bit Flip Code, Phase Flip Code

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| Space | Play / pause animation |
| Delete / Backspace | Delete selected gate |
| Escape | Deselect / close panels |
| ← → | Step backward / forward |
| 1 2 3 4 | Switch visualization tab |
| ⌘E | Export QASM |
| ⌘⇧E | Export Qiskit Python |

Click "Shortcuts" in the status bar for the full list.

## Architecture

```
src/
├── core/           # Pure quantum math — zero React dependencies
│   ├── complex     # Complex number arithmetic
│   ├── matrix      # Tensor products, partial trace, optimized gate application
│   ├── gates       # All gate definitions with unitary matrices
│   ├── statevector  # State evolution, measurement, interpolation
│   ├── circuit     # Circuit data model
│   ├── simulator   # Step-through simulation engine
│   ├── bloch       # Bloch sphere coordinate computation
│   ├── qasm        # QASM 2.0 parser and serializer
│   └── presets     # Built-in circuit library
├── shaders/        # GLSL vertex/fragment shaders
├── store/          # Zustand state management (circuit, simulation, UI, animation)
├── components/     # React components (layout, composer, viz, controls, code editor)
├── hooks/          # useSimulation, useAnimation, useKeyboard
└── utils/          # Colors, constants, export
```

## Tech Stack

| Layer | Choice |
|-------|--------|
| Build | Vite 5 |
| Framework | React 18 + TypeScript 5 |
| 3D | Three.js + React Three Fiber + drei |
| Shaders | Custom GLSL (Bloch glow, orbital density, ray-marched SDF) |
| Circuit editor | Custom SVG with drag-and-drop |
| Code editor | CodeMirror 6 |
| State | Zustand |
| Styling | Tailwind CSS |
| Tests | Vitest |

## Tests

137 tests covering complex arithmetic, matrix operations, all gate unitarity, statevector evolution, Bell/GHZ state generation, partial trace, Bloch vectors, measurement collapse, QASM round-trip parsing, circuit model operations, and animation interpolation.

```bash
npm test           # Single run
npm run test:watch  # Watch mode
```
