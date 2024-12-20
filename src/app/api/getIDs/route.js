// app/api/getIds/route.js
import { pool } from '@/utils/postgres';

export async function GET() {
  try {
    // Get all account IDs
    const accountResult = await pool.query(
      'SELECT DISTINCT account_id FROM customer_provisioning.account ORDER BY account_id'
    );

    // Get all device IDs
    const deviceResult = await pool.query(
      'SELECT DISTINCT device_id FROM customer_provisioning.seambit ORDER BY device_id'
    );

    // Return both sets of IDs
    return Response.json({
      accounts: accountResult.rows,
      devices: deviceResult.rows
    });

  } catch (error) {
    console.error('Database query error:', error);
    return Response.json(
      { error: 'Failed to fetch IDs from database' }, 
      { status: 500 }
    );
  }
}