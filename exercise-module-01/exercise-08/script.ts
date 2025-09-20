<<<<<<< HEAD
// Interface untuk Employee
interface Employee {
  addWorkingHours(hours: number): void;
  calculateTotalSalary(): number;
}

// Parent Class
abstract class BaseEmployee implements Employee {
  protected dailyHours: number[] = [];

  constructor(protected name: string) {}

  // Method untuk menambah jam kerja per hari
  addWorkingHours(hours: number): void {
    if (hours < 0) {
      console.log("Jam kerja tidak boleh negatif");
      return;
    }
    if (hours > 24) {
      console.log("Jam kerja tidak boleh lebih dari 24 jam");
      return;
    }
    this.dailyHours.push(hours);
    console.log(`${this.name} bekerja ${hours} jam hari ini`);
  }

  // Abstract method - harus diimplementasikan oleh child class
  abstract calculateTotalSalary(): number;

  // Method untuk mendapatkan total hari kerja
  getTotalWorkingDays(): number {
    return this.dailyHours.length;
  }

  // Method untuk mendapatkan total jam kerja
  getTotalWorkingHours(): number {
    return this.dailyHours.reduce((total, hours) => total + hours, 0);
  }
}

// Child Class - Full-time Employee
class FulltimeEmployee extends BaseEmployee {
  private readonly REGULAR_RATE = 100000;
  private readonly OVERTIME_RATE = 75000;
  private readonly OVERTIME_THRESHOLD = 6;

  calculateTotalSalary(): number {
    let totalSalary = 0;

    for (const hours of this.dailyHours) {
      if (hours > this.OVERTIME_THRESHOLD) {
        // Lebih dari 6 jam: 6 jam regular + sisa overtime
        const regularHours = this.OVERTIME_THRESHOLD;
        const overtimeHours = hours - this.OVERTIME_THRESHOLD;
        totalSalary +=
          regularHours * this.REGULAR_RATE + overtimeHours * this.OVERTIME_RATE;
      } else {
        // 6 jam atau kurang: semua regular
        totalSalary += hours * this.REGULAR_RATE;
      }
    }

    return totalSalary;
  }
}

// Child Class - Part-time Employee
class ParttimeEmployee extends BaseEmployee {
  private readonly REGULAR_RATE = 50000;
  private readonly OVERTIME_RATE = 30000;
  private readonly OVERTIME_THRESHOLD = 6;

  calculateTotalSalary(): number {
    let totalSalary = 0;

    for (const hours of this.dailyHours) {
      if (hours > this.OVERTIME_THRESHOLD) {
        // Lebih dari 6 jam: 6 jam regular + sisa overtime
        const regularHours = this.OVERTIME_THRESHOLD;
        const overtimeHours = hours - this.OVERTIME_THRESHOLD;
        totalSalary +=
          regularHours * this.REGULAR_RATE + overtimeHours * this.OVERTIME_RATE;
      } else {
        // 6 jam atau kurang: semua regular
        totalSalary += hours * this.REGULAR_RATE;
      }
    }

    return totalSalary;
  }
}

// Contoh penggunaan
console.log("=== PROGRAM PERHITUNGAN GAJI KARYAWAN ===\n");

// Buat employee
const fulltime1 = new FulltimeEmployee("Budi (Full-time)");
const parttime1 = new ParttimeEmployee("Siti (Part-time)");

// Tambahkan jam kerja untuk full-time employee
fulltime1.addWorkingHours(8); // 8 jam (6 regular + 2 overtime)
fulltime1.addWorkingHours(6); // 6 jam (semua regular)
fulltime1.addWorkingHours(4); // 4 jam (semua regular)

// Tambahkan jam kerja untuk part-time employee
parttime1.addWorkingHours(7); // 7 jam (6 regular + 1 overtime)
parttime1.addWorkingHours(5); // 5 jam (semua regular)
parttime1.addWorkingHours(3); // 3 jam (semua regular)

// Hitung dan tampilkan total gaji
console.log("\n=== HASIL PERHITUNGAN GAJI ===");

console.log(`\n${fulltime1["name"]}:`);
console.log(`Total hari kerja: ${fulltime1.getTotalWorkingDays()} hari`);
console.log(`Total jam kerja: ${fulltime1.getTotalWorkingHours()} jam`);
console.log(
  `Total gaji: Rp ${fulltime1.calculateTotalSalary().toLocaleString("id-ID")}`
);

console.log(`\n${parttime1["name"]}:`);
console.log(`Total hari kerja: ${parttime1.getTotalWorkingDays()} hari`);
console.log(`Total jam kerja: ${parttime1.getTotalWorkingHours()} jam`);
console.log(
  `Total gaji: Rp ${parttime1.calculateTotalSalary().toLocaleString("id-ID")}`
);

/*
Penjelasan Perhitungan:
Full-time Employee (Budi):

Hari 1: 8 jam = (6 × 100.000) + (2 × 75.000) = 600.000 + 150.000 = 750.000

Hari 2: 6 jam = 6 × 100.000 = 600.000

Hari 3: 4 jam = 4 × 100.000 = 400.000

Total: 750.000 + 600.000 + 400.000 = 1.750.000

Part-time Employee (Siti):

Hari 1: 7 jam = (6 × 50.000) + (1 × 30.000) = 300.000 + 30.000 = 330.000

Hari 2: 5 jam = 5 × 50.000 = 250.000

Hari 3: 3 jam = 3 × 50.000 = 150.000

Total: 330.000 + 250.000 + 150.000 = 730.000

Inheritance: BaseEmployee sebagai parent class

Encapsulation: Property protected dan private

Polymorphism: Method calculateTotalSalary() yang berbeda implementasi

Validation: Validasi input jam kerja

Flexible: Mudah ditambah tipe employee lainnya


*/
=======
// Interface untuk Employee
interface Employee {
  addWorkingHours(hours: number): void;
  calculateTotalSalary(): number;
}

// Parent Class
abstract class BaseEmployee implements Employee {
  protected dailyHours: number[] = [];

  constructor(protected name: string) {}

  // Method untuk menambah jam kerja per hari
  addWorkingHours(hours: number): void {
    if (hours < 0) {
      console.log("Jam kerja tidak boleh negatif");
      return;
    }
    if (hours > 24) {
      console.log("Jam kerja tidak boleh lebih dari 24 jam");
      return;
    }
    this.dailyHours.push(hours);
    console.log(`${this.name} bekerja ${hours} jam hari ini`);
  }

  // Abstract method - harus diimplementasikan oleh child class
  abstract calculateTotalSalary(): number;

  // Method untuk mendapatkan total hari kerja
  getTotalWorkingDays(): number {
    return this.dailyHours.length;
  }

  // Method untuk mendapatkan total jam kerja
  getTotalWorkingHours(): number {
    return this.dailyHours.reduce((total, hours) => total + hours, 0);
  }
}

// Child Class - Full-time Employee
class FulltimeEmployee extends BaseEmployee {
  private readonly REGULAR_RATE = 100000;
  private readonly OVERTIME_RATE = 75000;
  private readonly OVERTIME_THRESHOLD = 6;

  calculateTotalSalary(): number {
    let totalSalary = 0;

    for (const hours of this.dailyHours) {
      if (hours > this.OVERTIME_THRESHOLD) {
        // Lebih dari 6 jam: 6 jam regular + sisa overtime
        const regularHours = this.OVERTIME_THRESHOLD;
        const overtimeHours = hours - this.OVERTIME_THRESHOLD;
        totalSalary +=
          regularHours * this.REGULAR_RATE + overtimeHours * this.OVERTIME_RATE;
      } else {
        // 6 jam atau kurang: semua regular
        totalSalary += hours * this.REGULAR_RATE;
      }
    }

    return totalSalary;
  }
}

// Child Class - Part-time Employee
class ParttimeEmployee extends BaseEmployee {
  private readonly REGULAR_RATE = 50000;
  private readonly OVERTIME_RATE = 30000;
  private readonly OVERTIME_THRESHOLD = 6;

  calculateTotalSalary(): number {
    let totalSalary = 0;

    for (const hours of this.dailyHours) {
      if (hours > this.OVERTIME_THRESHOLD) {
        // Lebih dari 6 jam: 6 jam regular + sisa overtime
        const regularHours = this.OVERTIME_THRESHOLD;
        const overtimeHours = hours - this.OVERTIME_THRESHOLD;
        totalSalary +=
          regularHours * this.REGULAR_RATE + overtimeHours * this.OVERTIME_RATE;
      } else {
        // 6 jam atau kurang: semua regular
        totalSalary += hours * this.REGULAR_RATE;
      }
    }

    return totalSalary;
  }
}

// Contoh penggunaan
console.log("=== PROGRAM PERHITUNGAN GAJI KARYAWAN ===\n");

// Buat employee
const fulltime1 = new FulltimeEmployee("Budi (Full-time)");
const parttime1 = new ParttimeEmployee("Siti (Part-time)");

// Tambahkan jam kerja untuk full-time employee
fulltime1.addWorkingHours(8); // 8 jam (6 regular + 2 overtime)
fulltime1.addWorkingHours(6); // 6 jam (semua regular)
fulltime1.addWorkingHours(4); // 4 jam (semua regular)

// Tambahkan jam kerja untuk part-time employee
parttime1.addWorkingHours(7); // 7 jam (6 regular + 1 overtime)
parttime1.addWorkingHours(5); // 5 jam (semua regular)
parttime1.addWorkingHours(3); // 3 jam (semua regular)

// Hitung dan tampilkan total gaji
console.log("\n=== HASIL PERHITUNGAN GAJI ===");

console.log(`\n${fulltime1["name"]}:`);
console.log(`Total hari kerja: ${fulltime1.getTotalWorkingDays()} hari`);
console.log(`Total jam kerja: ${fulltime1.getTotalWorkingHours()} jam`);
console.log(
  `Total gaji: Rp ${fulltime1.calculateTotalSalary().toLocaleString("id-ID")}`
);

console.log(`\n${parttime1["name"]}:`);
console.log(`Total hari kerja: ${parttime1.getTotalWorkingDays()} hari`);
console.log(`Total jam kerja: ${parttime1.getTotalWorkingHours()} jam`);
console.log(
  `Total gaji: Rp ${parttime1.calculateTotalSalary().toLocaleString("id-ID")}`
);

/*
Penjelasan Perhitungan:
Full-time Employee (Budi):

Hari 1: 8 jam = (6 × 100.000) + (2 × 75.000) = 600.000 + 150.000 = 750.000

Hari 2: 6 jam = 6 × 100.000 = 600.000

Hari 3: 4 jam = 4 × 100.000 = 400.000

Total: 750.000 + 600.000 + 400.000 = 1.750.000

Part-time Employee (Siti):

Hari 1: 7 jam = (6 × 50.000) + (1 × 30.000) = 300.000 + 30.000 = 330.000

Hari 2: 5 jam = 5 × 50.000 = 250.000

Hari 3: 3 jam = 3 × 50.000 = 150.000

Total: 330.000 + 250.000 + 150.000 = 730.000

Inheritance: BaseEmployee sebagai parent class

Encapsulation: Property protected dan private

Polymorphism: Method calculateTotalSalary() yang berbeda implementasi

Validation: Validasi input jam kerja

Flexible: Mudah ditambah tipe employee lainnya


*/
>>>>>>> 9e68cf40c5b6a171d2ea8c61269021f372a59468
