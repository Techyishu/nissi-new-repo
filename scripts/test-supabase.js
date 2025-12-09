/**
 * Test script to verify Supabase connection
 * Run with: node scripts/test-supabase.js
 */

require('dotenv').config({ path: '.env.local' });

const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Missing Supabase environment variables!');
  console.error('Please ensure .env.local contains:');
  console.error('  - NEXT_PUBLIC_SUPABASE_URL');
  console.error('  - NEXT_PUBLIC_SUPABASE_ANON_KEY');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testConnection() {
  console.log('🔍 Testing Supabase connection...\n');
  console.log(`📡 URL: ${supabaseUrl}\n`);

  try {
    // Test 1: Check gallery_images table
    console.log('1️⃣ Testing gallery_images table...');
    const { data: galleryData, error: galleryError } = await supabase
      .from('gallery_images')
      .select('count')
      .limit(1);
    
    if (galleryError) {
      console.error('   ❌ Error:', galleryError.message);
    } else {
      console.log('   ✅ Gallery table accessible');
    }

    // Test 2: Check toppers table
    console.log('2️⃣ Testing toppers table...');
    const { data: toppersData, error: toppersError } = await supabase
      .from('toppers')
      .select('count')
      .limit(1);
    
    if (toppersError) {
      console.error('   ❌ Error:', toppersError.message);
    } else {
      console.log('   ✅ Toppers table accessible');
    }

    // Test 3: Check staff table
    console.log('3️⃣ Testing staff table...');
    const { data: staffData, error: staffError } = await supabase
      .from('staff')
      .select('count')
      .limit(1);
    
    if (staffError) {
      console.error('   ❌ Error:', staffError.message);
    } else {
      console.log('   ✅ Staff table accessible');
    }

    // Test 4: Check activities table
    console.log('4️⃣ Testing activities table...');
    const { data: activitiesData, error: activitiesError } = await supabase
      .from('activities')
      .select('count')
      .limit(1);
    
    if (activitiesError) {
      console.error('   ❌ Error:', activitiesError.message);
    } else {
      console.log('   ✅ Activities table accessible');
    }

    // Test 5: Check admin_users table
    console.log('5️⃣ Testing admin_users table...');
    const { data: adminData, error: adminError } = await supabase
      .from('admin_users')
      .select('count')
      .limit(1);
    
    if (adminError) {
      console.error('   ❌ Error:', adminError.message);
    } else {
      console.log('   ✅ Admin users table accessible');
    }

    console.log('\n✅ All tests completed!');
    console.log('\n📝 Next steps:');
    console.log('   1. Get your SUPABASE_SERVICE_ROLE_KEY from Supabase Dashboard');
    console.log('   2. Add it to .env.local');
    console.log('   3. Set ADMIN_PASSWORD and JWT_SECRET in .env.local');
    console.log('   4. Create an admin user using: node scripts/create-admin.js');

  } catch (error) {
    console.error('❌ Connection test failed:', error.message);
    process.exit(1);
  }
}

testConnection();

