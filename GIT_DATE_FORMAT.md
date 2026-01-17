# Git Configuration for os-check

## Problem

The issue "undefined , 18 / 01" occurs when using incorrect git log formatting commands. Specifically, using:

```bash
git log --pretty=format:"%y , %d / %m"
```

This is **incorrect** because:
- `%y`, `%d`, and `%m` are NOT valid git pretty-format placeholders
- `%d` in pretty-format shows ref decorations (branch/tag names), not the day
- `%m` shows commit marks (<, >, -), not the month  
- `%y` is not recognized and may show as "%y" or "undefined" in various tools

## Solution

This repository includes a `.gitconfig` file with proper date formatting configuration.

### How to Use

To adopt these settings for this repository, run from the repository root:

```bash
cd /path/to/os-check
git config --local include.path "$(pwd)/.gitconfig"
```

Or copy the configuration manually to `.git/config`.

### Correct Git Log Formats

#### Option 1: Using `--date=format` with `%ad`

```bash
git log --pretty=format:"%ad - %s" --date=format:"%Y, %d / %m"
```

Output example:
```
2026, 17 / 01 - Initial plan
2025, 27 / 03 - [chores]: added npm chart showing downloads
```

#### Option 2: Using the Configured Alias

After including the .gitconfig file, you can use:

```bash
git logdate
```

This will show properly formatted dates with year, day, and month.

### Date Format Placeholders

For use with `--date=format:`:
- `%Y` - 4-digit year (2026)
- `%y` - 2-digit year (26)
- `%m` - month number (01-12)
- `%d` - day of month (01-31)
- `%H` - hour (00-23)
- `%M` - minute (00-59)
- `%S` - second (00-59)

### Pretty Format Placeholders

For use with `--pretty=format:`:
- `%H` - full commit hash
- `%h` - abbreviated commit hash
- `%an` - author name
- `%ae` - author email
- `%ad` - author date (respects --date= option)
- `%cd` - committer date (respects --date= option)
- `%s` - commit subject/message
- `%d` - ref names (branches, tags) - NOT day of month!
- `%m` - commit mark (< > -) - NOT month!

## Summary

The key principle: **Use `%ad` or `%cd` with `--date=format:` to format dates, not raw date placeholders in `--pretty=format`**.

For more information, see: `git help log` or https://git-scm.com/docs/git-log
