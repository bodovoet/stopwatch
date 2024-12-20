import { pool } from '@/utils/postgres';

export async function GET() {
  try {
    // Query to get account_ids
    const accountQuery = await pool.query(
      'SELECT account_id FROM customer_provisioning.account'
    );

    // Query to get device_ids
    const deviceQuery = await pool.query(
      'SELECT device_id FROM customer_provisioning.seambit'
    );

    return Response.json({
      accounts: accountQuery.rows,
      devices: deviceQuery.rows
    });
  } catch (error) {
    console.error('Database query error:', error);
    return Response.json({ error: 'Failed to fetch IDs' }, { status: 500 });
  }
}