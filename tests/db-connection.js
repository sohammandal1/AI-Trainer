import { db } from '../lib/prisma'

async function testConnection() {
  try {
    await db.$connect()
    console.log('Database connection successful!')
  } catch (error) {
    console.error('Database connection failed:', error)
  } finally {
    await db.$disconnect()
  }
}

testConnection() 