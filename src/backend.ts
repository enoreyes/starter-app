/**
 * backend.ts
 * 
 * This file demonstrates how to interact with the Tauri/Rust backend.
 * It provides a simple API for the frontend to communicate with native functionality.
 */

// Import the invoke function from Tauri API
import { invoke } from '@tauri-apps/api/tauri';

/**
 * Sends a greeting to the Rust backend and returns the response.
 * 
 * This is a simple example of how to call Rust commands from TypeScript.
 * In a real application, you would define more complex interactions.
 * 
 * @param name - The name to greet
 * @returns A promise that resolves to the greeting message from the backend
 */
export async function sendGreeting(name: string): Promise<string> {
  try {
    // Invoke the 'greet' command defined in Rust
    // This would correspond to a #[tauri::command] function in your Rust code
    const response = await invoke<string>('greet', { name });
    return response;
  } catch (error) {
    console.error('Error calling Rust backend:', error);
    return `Error: Failed to send greeting to backend`;
  }
}

/**
 * A dummy function that simulates processing data through the Rust backend.
 * 
 * In a real application, you might use Rust for performance-critical operations
 * like data processing, file system operations, or system integrations.
 * 
 * @param data - The data to process
 * @returns A promise that resolves when processing is complete
 */
export async function processDataInRust(data: unknown): Promise<void> {
  // This is just a placeholder to demonstrate the pattern
  console.log('Would process in Rust backend:', data);
  
  // In a real implementation, you would invoke a Rust command:
  // await invoke('process_data', { data });
}
