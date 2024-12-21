import { pool } from './postgres'; // Import your PostgreSQL pool from the existing configuration

export async function fetchAccountAndDeviceIds() {
  try {
    // Fetch account IDs
    const accountResult = await pool.query(
      'SELECT account_id, account_name FROM customer_provisioning.account'
    );

    // Fetch device IDs for each account
    const accountData = await Promise.all(
      accountResult.rows.map(async (account) => {
        const deviceResult = await pool.query(
          'SELECT device_id, device_name FROM customer_provisioning.seambit WHERE account_id = $1',
          [account.account_id]
        );
        return {
          account_id: account.account_id,
          account_name: account.account_name,
          devices: deviceResult.rows,
        };
      })
    );

    return { accounts: accountData };
  } catch (error) {
    console.error('Error fetching account and device IDs:', error);
    return { accounts: [] }; // Return empty array on failure
  }
}