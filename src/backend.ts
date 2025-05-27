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
 * This calls the 'greet' command defined in our Rust backend (main.rs).
 * 
 * @param name - The name to greet
 * @returns A promise that resolves to the greeting message from the backend
 */
export async function sendGreeting(name: string): Promise<string> {
  try {
    // Invoke the 'greet' command defined in Rust (main.rs)
    const response = await invoke<string>('greet', { name });
    return response;
  } catch (error) {
    console.error('Error calling Rust backend:', error);
    return `Error: Failed to send greeting to backend`;
  }
}

/**
 * A placeholder function for future Rust backend integration.
 * 
 * In a real application, you would implement more commands in your
 * Rust backend (main.rs) and call them using the invoke function.
 * 
 * @param data - The data to process
 * @returns A promise that resolves when processing is complete
 */
export async function processDataInRust(data: unknown): Promise<void> {
  console.log('Would process in Rust backend:', data);
  
  // Example of how you would call a real Rust command:
  // await invoke('process_data', { data });
}
