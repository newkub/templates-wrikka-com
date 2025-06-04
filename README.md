# KoCLI - Template Starter CLI Tool

KoCLI เป็นเครื่องมือ CLI ที่ interactive กับ GitHub repository สำหรับการจัดการ template starter projects ของคุณ

## การติดตั้ง

```bash
bun install -g kocli
```

## การใช้งาน

```bash
kocli [command] [options]
```

## คำสั่ง

### Create

สร้างโปรเจกต์ใหม่จาก template

```bash
kocli create <project-name> --template <template-name>
```

ตัวเลือก:
- `--template, -t` - Template ที่ต้องการใช้ (เช่น next, vitepress, monorepo)
- `--path, -p` - ระบุ path สำหรับโปรเจกต์ใหม่

### Update

อัปเดต template ที่มีอยู่

```bash
kocli update
```

### Delete

ลบ template จาก local registry

```bash
kocli delete <template-name>
```

### Pull

ดึง version ล่าสุดของ template จาก repository

```bash
kocli pull <template-name>
```

## คุณสมบัติ

- Interactive CLI interface
- รองรับหลาย template frameworks
- เชื่อมต่อกับ GitHub repositories
- ปรับแต่งได้ตามความต้องการ
