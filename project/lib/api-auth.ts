import { cookies } from 'next/headers';
import { verifyAdminToken } from './auth';

export async function requireAdmin() {
  const token = cookies().get('admin_session')?.value;
  if (!token) return false;
  try {
    await verifyAdminToken(token);
    return true;
  } catch {
    return false;
  }
}
