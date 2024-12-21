// app/api/getIds/route.js
import { pool } from '@/utils/postgres';

export async function GET() {
  try {
    // Fetch accounts and their devices
    const accountResult = await pool.query(
      'SELECT DISTINCT account_id, account_name FROM customer_provisioning.account ORDER BY account_id'
    );

    const accountsWithDevices = await Promise.all(
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

    // Return accounts with associated devices
    return Response.json({
      accounts: accountsWithDevices,
    });
  } catch (error) {
    console.error('Database query error:', error);
    return Response.json(
      { error: 'Failed to fetch IDs from database' },
      { status: 500 }
    );
  }
}