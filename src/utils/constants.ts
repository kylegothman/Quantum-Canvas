/** Circuit composer layout constants */
export const CIRCUIT = {
  WIRE_SPACING: 56,      // Vertical distance between qubit wires
  SLOT_WIDTH: 64,        // Width of each gate slot
  SLOT_GAP: 8,           // Gap between slots
  GATE_SIZE: 44,         // Size of a gate block
  WIRE_Y_OFFSET: 40,     // Top padding before first wire
  LABEL_WIDTH: 48,       // Width reserved for qubit labels
  MIN_MOMENTS: 12,       // Minimum visible moment columns
} as const;

/** Animation timing */
export const ANIMATION = {
  GATE_DURATION_MS: 600,
  STEP_PAUSE_MS: 200,
  MIN_SPEED: 0.25,
  MAX_SPEED: 4,
  DEFAULT_SPEED: 1,
} as const;

/** Max supported qubits */
export const MAX_QUBITS = 6;
export const MIN_QUBITS = 1;
export const DEFAULT_QUBITS = 3;
